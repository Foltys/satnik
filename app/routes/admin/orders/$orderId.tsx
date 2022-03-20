import { Order } from '@prisma/client'
import type { LoaderFunction } from 'remix'
import { useLoaderData } from 'remix'
import { OAuth2Profile } from 'remix-auth-oauth2'

import { db } from '~/db.server'
import { authenticator } from '~/server/auth.server'

type LoaderData = {
	user: OAuth2Profile
	order: Order
}

export const loader: LoaderFunction = async ({ request, params }) => {
	const orderid: number = ~~params.orderId!
	const order = await db.order.findUnique({
		where: {
			id: orderid,
		},
	})
	const user = await authenticator.isAuthenticated(request, {
		failureRedirect: "/login",
	}) as OAuth2Profile
	return {user, order}
}

export default function ProductCategory() {
	const {user, order} = useLoaderData()
	return (
		<div>
			<p>{order.fullname}</p>
		</div>
	)
}
