import { count, findMany } from '../../../prisma/api/Order'
import { Fragment } from 'react'
import { json, LoaderFunction, Outlet, useLoaderData } from 'remix'
import { Order } from '~/root'

import OrderTable from '~/components/admin/OrderTable'
import OrderPreview from '~/components/admin/OrderPreview'

type LoaderData = {
	orderListItems: Array<Order>
	totalPages: number
	page: number
}

const PER_PAGE = 10

export const loader: LoaderFunction = async ({ request }) => {
	const url = new URL(request.url)
	const page = url.searchParams.has('page') ? parseInt(url.searchParams.get('page') as string, 10) : 1
	//const orderListItems = await getOrderByID()
	const orderListItems = await findMany({}, { created_at: 'desc' }, PER_PAGE, PER_PAGE * (page - 1))
	const totalCount = await count({})

	const data: LoaderData = {
		orderListItems,
		page,
		totalPages: Math.ceil(totalCount / PER_PAGE),
	}
	return json(data)
}

export default function Table() {
	const data = useLoaderData<LoaderData>()
	return (
		<>
			{/* tohle ochcává JIT tailwindu abych ty barvy mohl použít ve funkci */}
			<div className=" text-blue hidden"></div>
			<div className=" text-red hidden"></div>
			<div className=" text-brown-600 hidden"></div>
			<div id="layout" className="flex flex-row gap-12 mx-auto container items-start overflow-x-hidden">
				<OrderTable orders={data.orderListItems} totalPages={data.totalPages} page={data.page} />
				{/* <OrderPreview /> */}
			</div>
			<div>
				<div
					id="detail"
					className="basis-2/5 overflow-hidden shrink-0 text-gray-900 mx-auto pt-12 justify-center items-start bg-white p-12 rounded-3xl"
				>
					<Outlet />
				</div>
			</div>
		</>
	)
}
