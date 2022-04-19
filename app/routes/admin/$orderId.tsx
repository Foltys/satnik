import { Order } from '~/root'
import { LoaderFunction, ActionFunction, useSearchParams } from 'remix'
import { useLoaderData, Form } from 'remix'
import { OAuth2Profile } from 'remix-auth-oauth2'
import { getOrderByID, updateUnique } from '~/../prisma/api/Order'
import { authenticator } from '~/server/auth.server'
import { sendOrderReadyForPickup, sendOrderReadyToSend } from '~/mailer/html/api'

async function updateOrder(orderId: number, state: string) {
	//console.log('updateOrder', orderId, state)
	await updateUnique({ id: orderId }, { state: state })
}

async function sendOrderConfirmById(id: number) {
	const order = await getOrderByID(id)
	if (!order) return
	if (order.delivery_type === 'delivery') sendOrderReadyToSend(order as Order)
	else sendOrderReadyForPickup(order as Order)
}

export const loader: LoaderFunction = async ({ request, params }) => {
	const config = require('config')
	const authEnabled = config.get('auth.enabled')

	let user
	if (authEnabled) {
		user = (await authenticator.isAuthenticated(request, {
			failureRedirect: '/login',
		})) as OAuth2Profile
	}
	const orderid: number = ~~params.orderId!
	const order = await getOrderByID(orderid)
	return { ...(user && { user }), order }
}

export const action: ActionFunction = async ({ request }) => {
	const form = await request.formData()

	const orderId: number = Number(form.get('updateid'))
	//console.log(id)
	let action = form.get('action')
	switch (action) {
		case 'finish': {
			await Promise.all([sendOrderConfirmById(orderId), updateOrder(orderId, 'done')])
			return null
		}
		case 'process': {
			updateOrder(orderId, 'process')
			return null
		}
		case 'revert': {
			updateOrder(orderId, 'open')
			return null
		}
		default: {
			throw new Error('Unexpected action')
		}
	}
}

export default function OrderDetail() {
	const { order } = useLoaderData()
	const [params] = useSearchParams()
	const order_created = new Date(order.created_at).toLocaleDateString('cs-CZ', {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	})
	return (
		<div className="flex flex-col">
			<p className="text-3xl font-bold">{order.id}</p>
			<p className="text-sm font-bold text-brown-500 py-2">Vytvořeno: {order_created}</p>
			<div className="flex flex-col">
				{order.persons.map((person: any) => (
					<div key={person.id}>
						<div className="flex flex-row items-center place-content-between">
							<div className="flex flex-col grow">
								<p className="font-bold text-lg text-blue">{decodeURIComponent(person.fullname)}</p>
								<p>
									{person.sex === 'man' ? 'muž' : 'žena'}, {person.age}
								</p>
							</div>
							<div className="flex justify-center align-center p-4 m-4 rounded-xl bg-light">
								<img src="/cloth.svg" alt="" className="mr-2" />
								<div className="">{person.clothing_size}</div>
							</div>
							<div className="flex justify-center align-center p-4  m-4 rounded-xl bg-light">
								<img src="/shoe.svg" alt="" className="mr-2" />
								<div className=" ">{person.shoe_size}</div>
							</div>
						</div>

						<div className="text-sm">Oblečení</div>
						<div className="text-ellipsis overflow-hidden text-lg font-bold">
							{decodeURIComponent(person.requirements[0].description)}
						</div>
						{order.persons.length > 1 && <hr className="border border-brown-500" />}
					</div>
				))}
				<div className="flex flex-row justify-between mt-6 overflow-hidden">
					<div className="flex gap-y-1 flex-col text-sm text-gray-900 overflow-hidden">
						<span className=" text-brown-500 mb-2">Objednává:</span>
						<span className="overflow-hidden text-ellipsis">{decodeURIComponent(order.fullname)}</span>
						<span className="overflow-hidden text-ellipsis">{order.phone}</span>
						<a href={`mailto:${order.email}`} className="overflow-hidden text-ellipsis">
							{order.email}
						</a>
					</div>
					<div className="w-1 border-l border-l-brown-500 h-36 mx-6"></div>
					<div className="flex gap-y-1 flex-col text-sm text-gray-900 overflow-hidden">
						{order.delivery_type === 'delivery' ? (
							<>
								<span className=" text-brown-500 mb-2">Doručovací adresa:</span>
								<span className="overflow-hidden text-ellipsis">{decodeURIComponent(order.delivery_fullname)}</span>
								<span className="overflow-hidden text-ellipsis">{decodeURIComponent(order.delivery_city)}</span>
								<span className="overflow-hidden text-ellipsis">{decodeURIComponent(order.delivery_street)}</span>
								<span>{order.delivery_zip}</span>
								<a href={`tel:${order.delivery_phone}`}>{order.delivery_phone}</a>
								<a href={`mailto:${order.email}`} className="overflow-hidden text-ellipsis">
									{order.email}
								</a>
							</>
						) : (
							<>
								<span className="text-brown-500 mb-2">Místo vyzvednutí:</span>
								<span>Hala 13 v Pražské tržnici</span>
								<span>Bubenské nábřeží 306</span>
								<span>170 00 Praha 7</span>
								<a href={`tel:+420737597070`}>+420 737 59 70 70</a>
								<a href={`mailto:info@satnikpraha.cz`}>info@satnikpraha.cz</a>
							</>
						)}
					</div>
				</div>

				<Form method="post" action={`?${params.toString()}`} className="mt-6">
					<>
						{order.state === 'open' ? (
							<button className="text-blue font-bold" name="action" value="process">
								Začít vyřizovat
							</button>
						) : order.state != 'done' ? (
							<button className="text-blue font-bold" name="action" value="finish">
								Označit jako vyřízené
							</button>
						) : (
							<button className="text-blue font-bold" name="action" value="revert">
								Vrátit zpět
							</button>
						)}
					</>
					<input type="hidden" name="updateid" value={order.id} />
				</Form>
			</div>
		</div>
	)
}

// [key: string]: any
// sex: 'man' | 'woman'
// adult: boolean
// fullname: string
// age: string
// clothing_size: string
// shoe_size: string
// requirements: Requirement[]
//----
// fullname: string
// phone: string
// email: string
// delivery_type: 'delivery' | 'pickup'
// delivery_fullname?: string
// delivery_street?: string
// delivery_city?: string
// delivery_zip?: string
// delivery_phone?: string
// persons: Person[]
// state: 'open'
// lang: 'ua' | 'cs'
// created_at: {}
// updated_at: {}
