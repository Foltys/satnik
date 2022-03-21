import { Order } from '@prisma/client'
import type { LoaderFunction } from 'remix'
import { useLoaderData } from 'remix'
import { OAuth2Profile } from 'remix-auth-oauth2'
import { getOrderByID, updateUnique } from '~/../prisma/api/Order'
import { db } from '~/db.server'
import { authenticator } from '~/server/auth.server'

type LoaderData = {
	user?: OAuth2Profile
	order: Order
}

const authEnabled = true

async function updateOrder(orderId: number, state: string) {
	//console.log('updateOrder', orderId, state)
	await updateUnique({ id: orderId }, { state: state })
}

export const loader: LoaderFunction = async ({ request, params }) => {
	const orderid: number = ~~params.orderId!
	const order = await getOrderByID(orderid)
	let user
	if (authEnabled) {
		user = (await authenticator.isAuthenticated(request, {
			failureRedirect: '/login',
		})) as OAuth2Profile
	}
	return { ...(user && { user }), order }
}

export default function ProductCategory() {
	const { user, order } = useLoaderData()
	return (
		<div className="flex flex-col">
			<p className="text-3xl font-bold">{order.id}</p>
			<p className="text-sm font-semibold text-[#C6B49D] py-2">Vytvořeno: {order.created_at}</p>
			<div className="flex flex-col">
				{order.persons.map((person: any) => (
					<div key={person.id}>
						<div className="flex flex-row gap-6">
							<div className="flex flex-col">
								<p className="font-semibold text-lg text-[#0A9DBF]">{person.fullname}</p>
								<p>
									{person.sex}, {person.age}
								</p>
							</div>
							<div className='flex justify-center align-center'>
								<div className=" p-4 rounded-xl bg-[#C6B49D]">{person.clothing_size}</div>
							</div>
							<div className='flex justify-center align-center'>
								<div className=" p-4 rounded-xl bg-[#C6B49D]">{person.shoe_size}</div>
							</div>
						</div>
					</div>
				))}
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
