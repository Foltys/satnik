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
			return '[#EB2F06]'
		case 'process':
			return '[#0A9DBF]'
		case 'done':
			return '[#957D5E]'
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
			{data.user && (
				<header className="text-gray-600 body-font">
					<div className="container mx-auto flex flex-wrap py-5 flex-col md:flex-row items-center">
						<div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
							{data.user.photos &&
								data.user.photos.map((photo: any) => (
									<img
										key={data.user?.id}
										src={photo.value}
										alt={JSON.stringify(data?.user?.emails) || 'profile'}
										className="w-10 h-10 text-white border-[#0A9DBF] rounded-full"
									/>
								))}
							<span className="ml-3 text-xl">{data.user.displayName}</span>
						</div>
						<nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 	flex flex-wrap items-center text-base justify-center">
							<a className="mr-5 hover:text-gray-900 hidden" href="/">
								maybe some links
							</a>
						</nav>
						<Form action="/logout" method="post">
							<button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
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
			<div className=" text-[#0A9DBF] hidden"></div>
			<div className=" text-[#EB2F06] hidden"></div>
			<div className=" text-[#957D5E] hidden"></div>
			<div className="grid grid-cols-8 grid-rows-1 gap-x-4 gap-y-8 text-gray-800 container mx-auto pt-12 justify-center items-start bg-white p-12 rounded-3xl">
				<div className="text-[#957D5E] pb-12">Číslo obj.</div>
				<div className="text-[#957D5E] pb-12">Jméno</div>
				<div className="text-[#957D5E] pb-12">Místo doručení</div>
				<div className="text-[#957D5E] pb-12">Termín doručení</div>
				<div className="text-[#957D5E] pb-12">Způsob dopravy</div>
				<div className="text-[#957D5E] pb-12">Kontakt na objednávajícího</div>
				<div className="text-[#957D5E] pb-12">Stav objednávky</div>
				<div className="text-[#957D5E] pb-12">Možnosti objednávky</div>
				{data.orderListItems.map((order) => (
					<Fragment key={order.id}>
						<div className="text-[#0A9DBF] font-semibold ">{order.id}</div>

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
						<div className={`font-semibold text-${getStateColor(order.state)}`}>{translateState(order.state)}</div>
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
