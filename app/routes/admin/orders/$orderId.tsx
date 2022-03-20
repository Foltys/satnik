import { json, useLoaderData } from 'remix'
import type { LoaderFunction } from 'remix'

import { db } from '~/db.server'

export const loader: LoaderFunction = async ({ params }) => {
	const orderid: number = ~~params.orderId!
	return json(
		await db.order.findUnique({
			where: {
				id: orderid,
			},
		}),
	)
}

export default function ProductCategory() {
	const order = useLoaderData()
	return (
		<div>
			<p>{order.fullname}</p>
		</div>
	)
}
