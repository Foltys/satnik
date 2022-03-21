import { Order } from '~/root'
import { Fragment } from 'react'
import type { ActionFunction, LoaderFunction } from 'remix'
import { Form, json, Link, useLoaderData } from 'remix'
import { OAuth2Profile } from 'remix-auth-oauth2'
import { authenticator } from '~/server/auth.server'
import { findMany, getOrderByID, updateUnique } from '../../../prisma/api/Order'

type LoaderData = {
	user?: OAuth2Profile
	orderListItems: Array<Order>
}

const authEnabled = true

export const loader: LoaderFunction = async ({ request }) => {
	let user
	if (authEnabled) {
		user = (await authenticator.isAuthenticated(request, {
			failureRedirect: '/login',
		})) as OAuth2Profile
	}
	//const orderListItems = await getOrderByID()
	const orderListItems = await findMany({}, { created_at: 'desc' }, 5)

	const data: LoaderData = {
		...(user && { user }),
		orderListItems,
	}
	return json(data)
}

async function updateOrder(orderId: number, state: string) {
	//console.log('updateOrder', orderId, state)
	await updateUnique({ id: orderId }, { state: state })
}

// tady musíme časem udělat fakt překlad
function translateState(state: string): string {
	switch (state) {
		case 'open':
			return 'Čeká na zpracování'
		case 'process':
			return 'Zpracovává se'
		case 'done':
			return 'Vyřízeno'
		default:
			return 'WTF'
	}
}

function translateDeliveryType(type: string): string {
	switch (type) {
		case 'pickup':
			return 'Osobní odběr'
		case 'delivery':
			return 'Dovoz od Šatníku'
		default:
			return 'WTF'
	}
}

function getStateColor(state: string): string {
	switch (state) {
		case 'open':
			return 'black'
		case 'process':
			return 'blue-500'
		case 'done':
			return 'red-500'
		default:
			return ''
	}
}

async function sendOrderConfirmById(id: number) {
	const order = await getOrderByID(id)
	//sendOrderConfirm(order as Order) fuck, some schema is fucked
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

export default function OrdersScreen() {
	const data = useLoaderData<LoaderData>()

	return (
		<>
			{/* tohle ochcává JIT tailwindu abych ty barvy mohl použít ve funkci */}
			{data.user && (
				<>
					<ul>
						<li>
							<strong>displayName:</strong> {data.user.displayName}
						</li>
						<li>
							<strong>provider:</strong> {data.user.provider}
						</li>
						<li>
							<strong>emails:</strong> {JSON.stringify(data.user.emails)}
						</li>
						{data.user.photos &&
							data.user.photos.map((photo: any) => (
								<li key={data.user?.id}>
									<img src={photo.value} alt="profile" />
								</li>
							))}
					</ul>
					<Form action="/logout" method="post">
						<button>Logout</button>
					</Form>
				</>
			)}
			<div className="border border-black hidden"></div>
			<div className="border border-blue-500 hidden"></div>
			<div className="border border-red-500 hidden"></div>
			<div className="grid grid-cols-8 gap-4 text-gray-800 container mx-auto pt-12 justify-center items-center ">
				<div className="font-semibold pb-12">Číslo obj.</div>
				<div className="font-semibold pb-12">Jméno</div>
				<div className="font-semibold pb-12">Místo doručení</div>
				<div className="font-semibold pb-12">Termín doručení</div>
				<div className="font-semibold pb-12">Způsob dopravy</div>
				<div className="font-semibold pb-12">Kontakt na objednávajícího</div>
				<div className="font-semibold pb-12">Stav objednávky</div>
				<div className="font-semibold pb-12">Možnosti objednávky</div>
				{data.orderListItems.map((order) => (
					<Fragment key={order.id}>
						<div className="text-[#0A9DBF] font-semibold ">
							{order.id}
						</div>

						<div>{order.fullname}</div>
						{order.delivery_type === 'pickup' ? (
							<div>Šatník</div>
						) : (
							<div>
								{order.delivery_city},{order.delivery_street}
							</div>
						)}

						<div>ASAP</div>
						<div>{translateDeliveryType(order.delivery_type)}</div>
						<a href="mailto:{order.email}" className="underline">
							{order.email}
						</a>
						<div className={`border px-4 py-2 border-${getStateColor(order.state)}`}>{translateState(order.state)}</div>
						<Form method="post">
							<>
								{order.state === 'open' ? (
									<button className="text-[#0A9DBF] font-semibold" name="action" value="process">
										Začít vyřizovat
									</button>
								) : order.state != 'done' ? (
									<button className="text-[#0A9DBF] font-semibold" name="action" value="finish">
										Označit jako vyřízené
									</button>
								) : (
									<button className="text-[#0A9DBF] font-semibold" name="action" value="revert">
										Vrátit zpět
									</button>
								)}
							</>
							<input type="hidden" name="updateid" value={order.id} />
						</Form>
					</Fragment>
				))}
			</div>
		</>
	)
}
