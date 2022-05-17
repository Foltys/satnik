import { findMany, assignUserToOrder, sendOrder, packOrder, unassignUserFromOrder } from '../../../prisma/api/Order'
import { useEffect, useState } from 'react'
import { OAuth2Profile } from 'remix-auth-oauth2'
import {
	ActionFunction,
	Form,
	json,
	Link,
	LoaderFunction,
	Outlet,
	redirect,
	useFetcher,
	useLoaderData,
	useOutletContext,
} from 'remix'
import { Order } from '~/root'

import { authenticator } from '~/server/auth.server'

type LoaderData = {
	orderListItems: Array<Order>
	readyOnlyChecked: boolean
}

type ParsedData = {
	currentProcessingOrders: Array<Order>
	restOfTheOrders: Array<Order>
}

export const action: ActionFunction = async ({ request }) => {
	const { _action, id: orderId } = Object.fromEntries(await request.formData())

	const config = require('config')
	const authEnabled = config.get('auth.enabled')

	let user
	if (authEnabled) {
		user = (await authenticator.isAuthenticated(request, {
			failureRedirect: '/login',
		})) as OAuth2Profile
	}

	switch (_action) {
		case 'order_assign_myself':
			if (!user) {
				redirect('/login')
			}
			return json(await assignUserToOrder(user?.id as string, parseInt(orderId as string)))
		case 'order_unassign_myself':
			if (!user) {
				redirect('/login')
			}
			return json(await unassignUserFromOrder(parseInt(orderId as string)))
		case 'order_done':
			return json(await sendOrder(parseInt(orderId as string)))
		case 'order_packed':
			return json(await packOrder(parseInt(orderId as string)))
		default:
			return json({ success: false })
	}
}

export const loader: LoaderFunction = async ({ request }) => {
	const url = new URL(request.url)
	const readyOnlyChecked = url.searchParams.has('ready_only') && url.searchParams.get('ready_only') == 'on'

	//const orderListItems = await getOrderByID()
	const where = readyOnlyChecked ? { state: 'ready' } : {}
	const orderListItems = await findMany(where, { created_at: 'asc' })

	const data: LoaderData = {
		orderListItems,
		readyOnlyChecked,
	}
	return json(data)
}

export default function List() {
	const fetcher = useFetcher<LoaderData>()
	const { orderListItems, readyOnlyChecked } = useLoaderData<LoaderData>()
	const { user } = useOutletContext<{ user: OAuth2Profile | undefined }>()

	const [data, setData] = useState(parseData(orderListItems))

	function parseData(newData: Order[]): ParsedData {
		return newData.reduce(
			(acc, item) => {
				if (item.userId == user?.id && item.state == 'in_progress') {
					acc.currentProcessingOrders.push(item)
				} else {
					acc.restOfTheOrders.push(item)
				}
				return acc
			},
			{ currentProcessingOrders: [], restOfTheOrders: [] } as ParsedData,
		)
	}

	useEffect(() => setData(parseData(orderListItems)), [orderListItems])

	useEffect(() => {
		const interval = setInterval(() => {
			if (document.visibilityState === 'visible') {
				fetcher.load('/admin/list')
			}
		}, 5 * 1000)

		return () => clearInterval(interval)
	}, [])

	useEffect(() => {
		if (fetcher.data) {
			setData(parseData(fetcher.data.orderListItems))
		}
	}, [fetcher.data])
	return (
		<>
			{data.currentProcessingOrders && data.currentProcessingOrders.length > 0 ? (
				<div className="bg-blue p-3">
					<div className="flex flex-row justify-between text-white">
						<div className="text-2xl my-auto font-bold">Vyřizuji</div>
						<div className="text-sm my-auto">Moje úkoly</div>
					</div>
					{data.currentProcessingOrders.map(OrderOnList)}
				</div>
			) : null}

			<div className="flex flex-row px-3 pt-3 justify-between">
				<div className="text-2xl text-gray-900 my-auto font-bold">Všechny poptávky</div>
				<Form className="my-auto" method="get">
					<input
						id="ready_only"
						name="ready_only"
						type="checkbox"
						defaultChecked={readyOnlyChecked}
						onChange={(e) => {
							e.currentTarget.form?.submit()
						}}
					/>
					<label htmlFor="ready_only" className="text-blue text-base my-auto">
						Připravené
					</label>
				</Form>
			</div>

			<div id="layout" className="flex flex-col gap-1 mt-5 px-3 container items-start">
				{data.restOfTheOrders.map(OrderOnList)}
			</div>
			<Outlet />
		</>
	)
}

function OrderOnList(order: Order) {
	return (
		<div
			className={`rounded-xl border-2 flex-col w-full p-3 ${
				order.state != 'done' && 'bg-white'
			} border-brown-500 text-gray-900`}
			key={order.id}
		>
			<div className="flex flex-row justify-between text-base mb-3">
				<Link to={`${order.id}`} className="text-blue">
					{order.id}
				</Link>
				<span>{order.fullname}</span>
			</div>
			<div className="flex flex-row justify-between text-sm" style={{ marginBottom: 2 }}>
				<span>
					{order.delivery_city}, {order.delivery_street}, {order.delivery_zip}
				</span>
				<span>{order.phone}</span>
			</div>
			<div className="flex flex-row justify-between  text-sm mb-3">
				<span>{order.delivery_type == 'delivery' ? 'Dovoz od Šatníku' : 'Osobní převzetí'}</span>
				<span>{order.email}</span>
			</div>
			{OrderFooter(order)}
		</div>
	)
}

function OrderFooter(order: Order) {
	switch (order.state) {
		case 'open':
			return (
				<div className="flex flex-row justify-between text-sm">
					<div className="text-center text-red my-auto">Čeká na zpracování</div>
					<Form method="post">
						<button
							name="_action"
							value="order_assign_myself"
							className="text-base px-6 py-3 bg-red rounded-3xl text-white z-50"
						>
							Přebrat si k vyřízení
						</button>
						<input type="hidden" name="id" value={order.id} />
					</Form>
				</div>
			)
		case 'ready':
			return (
				<div className="flex flex-row justify-between text-sm">
					<div className="text-center rounded-md bg-blue text-white py-1 px-2">Připraveno k odeslání</div>
					<Form method="post">
						<button
							name="_action"
							value="order_done"
							className="text-base px-6 py-3 border-blue border-2 bg-white rounded-3xl text-blue z-50"
						>
							Hotovo
						</button>
						<input type="hidden" name="id" value={order.id} />
					</Form>
				</div>
			)
		case 'done':
			return (
				<div className="flex flex-row justify-between text-sm">
					<div className="text-center text-red my-auto">Vyřízeno</div>
				</div>
			)
		case 'in_progress':
			return (
				<div className="flex flex-row justify-between text-sm">
					<Form method="post" className="text-center rounded-md bg-blue mx-1 text-white my-auto">
						<button name="_action" value="order_unassign_myself">
							Zrušit
						</button>
						<input type="hidden" name="id" value={order.id} />
					</Form>
					<Form method="post">
						<button
							name="_action"
							value="order_packed"
							className="text-base px-6 py-3 border-blue border-2 bg-white rounded-3xl text-blue"
						>
							Mám zabaleno
						</button>
						<input type="hidden" name="id" value={order.id} />
					</Form>
				</div>
			)
	}
}
