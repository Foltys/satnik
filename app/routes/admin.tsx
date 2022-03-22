import { Order } from '~/root'
import { Fragment } from 'react'
import type { LoaderFunction } from 'remix'
import { Form, json, useLoaderData, Outlet, Link } from 'remix'
import { OAuth2Profile } from 'remix-auth-oauth2'
import { authenticator } from '~/server/auth.server'
import { findMany } from '../../prisma/api/Order'

type LoaderData = {
	user?: OAuth2Profile
	orderListItems: Array<Order>
}

export const loader: LoaderFunction = async ({ request }) => {
	const config = require('config')
	const authEnabled = config.get('auth.enabled')

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

// async function updateOrder(orderId: number, state: string) {
// 	//console.log('updateOrder', orderId, state)
// 	await updateUnique({ id: orderId }, { state: state })
// }

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
			return 'red'
		case 'process':
			return 'blue'
		case 'done':
			return 'brown-600'
		default:
			return ''
	}
}

export default function Admin() {
	const data = useLoaderData<LoaderData>()

	return (
		<>
			{data.user && (
				<header className="text-gray-600 body-font">
					<div className="container mx-auto flex flex-wrap py-5 flex-col md:flex-row items-center">
						<div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
							{data.user.photos &&
								data.user.photos.map((photo: any) => (
									<img
										key={data.user?.id}
										src={photo.value}
										alt={'profile'}
										className="w-10 h-10 text-white border-blue rounded-full"
									/>
								))}
							<span className="ml-3 text-xl">{data.user.displayName}</span>
						</div>
						<nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 flex flex-wrap items-center text-base justify-center">
							<a className="mr-5 hover:text-gray-900 hidden" href="/">
								maybe some links
							</a>
						</nav>
						<Form action="/logout" method="post">
							<button className="inline-flex items-center  font-medium border-0 py-1 px-3 focus:outline-none hover:text-gray-900 rounded text-base mt-4 md:mt-0">
								Logout
								<svg
									fill="none"
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									className="w-4 h-4 ml-1"
									viewBox="0 0 24 24"
								>
									<path d="M5 12h14M12 5l7 7-7 7"></path>
								</svg>
							</button>
						</Form>
					</div>
				</header>
			)}
			{/* tohle ochcává JIT tailwindu abych ty barvy mohl použít ve funkci */}
			<div className=" text-blue hidden"></div>
			<div className=" text-red hidden"></div>
			<div className=" text-brown-600 hidden"></div>
			<div id="layout" className="flex flex-row gap-12 mx-auto container items-start">
                <div id='lists flex flex-col'>
				<div
					id="new_list"
					className="grid grid-cols-4 grid-rows-1 gap-x-4 gap-y-8 text-gray-900 mx-auto pt-12  bg-white p-12 rounded-3xl basis-2/3"
				>
					<div className="text-brown-600 pb-12">Číslo obj.</div>
					<div className="text-brown-600 pb-12">Objednávající</div>
					<div className="text-brown-600 pb-12"></div>
					<div className="text-brown-600 pb-12">Stav objednávky</div>
					{data.orderListItems.map((order) => (
						<Fragment key={order.id}>
							<Link to={`${order.id}`} prefetch="intent">
								{order.id}
							</Link>

							<Link to={`${order.id}`} prefetch="intent">
								<div className="text-blue font-bold">{order.fullname}</div>
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
                {/* in case there will be archive list */}
                <div id='archive'>
                    
                </div>
                </div>
				<div
					id="detail"
					className="basis-1/3 text-gray-900 mx-auto pt-12 justify-center items-start bg-white p-12 rounded-3xl"
				>
					<Outlet />
				</div>
			</div>
		</>
	)
}
