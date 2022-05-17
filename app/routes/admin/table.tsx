import { count, findMany } from '../../../prisma/api/Order'
import { Fragment } from 'react'
import { json, Link, LoaderFunction, Outlet, useLoaderData } from 'remix'
import { Order } from '~/root'

import { translateState } from '../../utils/translateState'
import { getStateColor } from '../../utils/getStateColor'

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
			<div id="layout" className="flex flex-row gap-12 mx-auto container items-start">
				<div id="lists flex flex-col">
					<div className="pt-12 bg-white p-12 rounded-3xl basis-2/3">
						<div id="new_list" className="grid grid-cols-4 grid-rows-1 gap-x-4 gap-y-8 text-gray-900 mx-auto">
							<div className="text-brown-600 pb-12">Číslo obj.</div>
							<div className="text-brown-600 pb-12">Objednávající</div>
							<div className="text-brown-600 pb-12"></div>
							<div className="text-brown-600 pb-12">Stav objednávky</div>
							{data.orderListItems.map((order) => (
								<Fragment key={order.id}>
									<Link to={{ pathname: order.id.toString(), search: `?page=${data.page}` }} prefetch="intent">
										{order.id}
									</Link>

									<Link to={{ pathname: order.id.toString(), search: `?page=${data.page}` }} prefetch="intent">
										<div className="text-blue text-ellipsis overflow-hidden whitespace-nowrap font-bold">
											{decodeURIComponent(order.fullname)}
										</div>
									</Link>
									{order.delivery_type === 'pickup' ? (
										<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="#000" viewBox="0 0 24 24">
											<path
												transform="translate(-6.29 -6) scale(.06452)"
												d="M378.9 360.9H188l76.6-69.3-15.6-17.2-99 89.5 7.8 20.2h251.3l7.8-20.2-149.5-139 17-18.2 26 24.3 15.8-16.9-42.9-40.2-48.7 51.9z"
											/>
										</svg>
									) : (
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-6 w-6"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
											strokeWidth={2}
										>
											<path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
											/>
										</svg>
									)}

									<div className={`font-bold mr-8 text-${getStateColor(order.state)}`}>
										{translateState(order.state)}
									</div>
								</Fragment>
							))}
						</div>
						{data.totalPages > 1 && (
							<div key={data.page} className="flex w-full mt-12 justify-center">
								{data.page > 1 && (
									<Link to={`?page=${data.page - 1}`}>
										<button className="rounded-full w-8 h-8 ">←</button>
									</Link>
								)}
								{Array.from({ length: data.totalPages }).map((_, idx) => (
									<Link to={`?page=${idx + 1}`} key={idx}>
										<button
											className={`rounded-full w-8 h-8 ${
												idx + 1 === data.page ? 'bg-red text-white' : 'hover:bg-light'
											}`}
										>
											{idx + 1}
										</button>
									</Link>
								))}
								{data.page < data.totalPages && (
									<Link to={`?page=${data.page + 1}`}>
										<button className="rounded-full w-8 h-8 ">→</button>
									</Link>
								)}
							</div>
						)}
					</div>
					{/* in case there will be archive list */}
					<div id="archive"></div>
				</div>
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
