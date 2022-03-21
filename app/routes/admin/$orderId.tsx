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
		<div>
			<p>{order.fullname}</p>
		</div>
	)
}
