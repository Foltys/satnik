import { json, Link, LoaderFunction, useLoaderData } from 'remix'
import { getOrderByID } from '../../../../prisma/api/Order'

export const loader: LoaderFunction = async ({ request, params }) => {
	const order = await getOrderByID(parseInt(params.orderId as string))
	return json({ order })
}

export default function OrderDetail() {
	console.log(useLoaderData())
	return null
}
