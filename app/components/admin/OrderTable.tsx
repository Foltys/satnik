import { Fragment } from 'react'
import { Link } from 'remix'
import { Order } from '~/root'
import OrderStateControl from './OrderStateControl'

type OrderTableProps = {
	orders: Array<Order>
	page: number
	totalPages: number
}

export default function OrderTable({ page, orders, totalPages }: OrderTableProps) {
	return (
		<div className="w-full">
			<div className="flex justify-between px-3">
				<h1 className="text-2xl text-black font-bold">Poptávky</h1>
			</div>
			<div className="grid grid-cols-[50px_1fr_160px] text-left text-tiny h-10 items-center">
				<div className="text-right p-1.5 pl-3 font-normal">ID</div>
				<div className="p-1.5 font-normal w-full">Jméno</div>
				<div className="p-1.5 font-normal w-full whitespace-nowrap pr-3">Stav poptávky</div>
			</div>
			<div className="grid grid-cols-[50px_1fr_160px] text-left text-tiny bg-white auto-rows-[60px] items-stretch text-black">
				{orders.map((order) => (
					<Fragment key={order.id}>
						<div className="p-1.5 pl-3 justify-end text-black border-b border-b-brown-500 flex items-center">
							{order.id}
						</div>
						<div className="p-1.5 overflow-hidden border-b border-b-brown-500 flex items-center">
							<Link
								to={{ pathname: order.id.toString(), search: `?page=${page}` }}
								prefetch="intent"
								className="font-bold text-blue underline text-ellipsis whitespace-nowrap overflow-hidden"
							>
								{order.fullname}
							</Link>
						</div>
						<div className="p-1.5 border-b-brown-500  border-b flex items-center">
							<OrderStateControl order={order} />
						</div>
					</Fragment>
				))}
			</div>
		</div>
		// <div id="lists flex flex-col">
		// 	<div className="pt-12 bg-white p-12 rounded-3xl basis-2/3">
		// 		<div id="new_list" className="grid grid-cols-4 grid-rows-1 gap-x-4 gap-y-8 text-gray-900 mx-auto">
		// 			<div className="text-brown-600 pb-12">Číslo obj.</div>
		// 			<div className="text-brown-600 pb-12">Objednávající</div>
		// 			<div className="text-brown-600 pb-12"></div>
		// 			<div className="text-brown-600 pb-12">Stav objednávky</div>
		// 			{orders.map((order) => (
		// 				<Fragment key={order.id}>
		// 					<Link to={{ pathname: order.id.toString(), search: `?page=${page}` }} prefetch="intent">
		// 						{order.id}
		// 					</Link>

		// 					<Link to={{ pathname: order.id.toString(), search: `?page=${page}` }} prefetch="intent">
		// 						<div className="text-blue text-ellipsis overflow-hidden whitespace-nowrap font-bold">
		// 							{decodeURIComponent(order.fullname)}
		// 						</div>
		// 					</Link>
		// 					{order.delivery_type === 'pickup' ? (
		// 						<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="#000" viewBox="0 0 24 24">
		// 							<path
		// 								transform="translate(-6.29 -6) scale(.06452)"
		// 								d="M378.9 360.9H188l76.6-69.3-15.6-17.2-99 89.5 7.8 20.2h251.3l7.8-20.2-149.5-139 17-18.2 26 24.3 15.8-16.9-42.9-40.2-48.7 51.9z"
		// 							/>
		// 						</svg>
		// 					) : (
		// 						<svg
		// 							xmlns="http://www.w3.org/2000/svg"
		// 							className="h-6 w-6"
		// 							fill="none"
		// 							viewBox="0 0 24 24"
		// 							stroke="currentColor"
		// 							strokeWidth={2}
		// 						>
		// 							<path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
		// 							<path
		// 								strokeLinecap="round"
		// 								strokeLinejoin="round"
		// 								d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
		// 							/>
		// 						</svg>
		// 					)}

		// 					<div className={`font-bold mr-8 text-${getStateColor(order.state)}`}>{translateState(order.state)}</div>
		// 				</Fragment>
		// 			))}
		// 		</div>
		// 		{totalPages > 1 && (
		// 			<div key={page} className="flex w-full mt-12 justify-center">
		// 				{page > 1 && (
		// 					<Link to={`?page=${page - 1}`}>
		// 						<button className="rounded-full w-8 h-8 ">←</button>
		// 					</Link>
		// 				)}
		// 				{Array.from({ length: totalPages }).map((_, idx) => (
		// 					<Link to={`?page=${idx + 1}`} key={idx}>
		// 						<button className={`rounded-full w-8 h-8 ${idx + 1 === page ? 'bg-red text-white' : 'hover:bg-light'}`}>
		// 							{idx + 1}
		// 						</button>
		// 					</Link>
		// 				))}
		// 				{page < totalPages && (
		// 					<Link to={`?page=${page + 1}`}>
		// 						<button className="rounded-full w-8 h-8 ">→</button>
		// 					</Link>
		// 				)}
		// 			</div>
		// 		)}
		// 	</div>
		// </div>
	)
}
