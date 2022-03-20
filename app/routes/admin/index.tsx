import type { LoaderFunction, ActionFunction } from 'remix'
import { useLoaderData, Link, json, Form, useTransition } from 'remix'
import { db } from '~/db.server'
import type { Order } from '@prisma/client'
import { Fragment } from 'react'

type LoaderData = {
	orderListItems: Array<Order>
}

export const loader: LoaderFunction = async ({ request }) => {
	const orderListItems = await db.order.findMany({
		take: 5,
		//where: { lang: "ua" },
		orderBy: { created_at: 'desc' },
	})

	const data: LoaderData = {
		orderListItems,
	}
	return json(data)
}

export const action: ActionFunction = async ({ request }) => {
	const form = await request.formData()
	const orderId: number = Number(form.get('process'))
	//console.log(id)
	const updateOrder = await db.order.update({
		where: { id: orderId },
		data: {
		  state: 'processed',
		},
	  })
	//const orderToUpdate = await db.order.findUnique({
	//	where: { id: orderId },
	//})
	//console.log(orderToUpdate)

	return null
}

// sem jenom línej
//fullname: { type: 'string' },
// phone: { type: 'string' },
// email: { type: 'string' },
// delivery_type: { const: 'delivery' },
// delivery_fullname: { type: 'string' },
// delivery_street: { type: 'string' },
// delivery_city: { type: 'string' },
// delivery_zip: { type: 'string' },
// delivery_phone: { type: 'string' },
// persons: { type: 'array', items: personSchema },
// state: { enum: ['open'] },
// lang: { enum: ['ua', 'cs'] },
// created_at: {},
// updated_at: {},
export default function OrdersScreen() {
	const data = useLoaderData<LoaderData>()

	return (
		<Form method="post">
			<div className="grid grid-cols-8 gap-4 text-gray-800 container mx-auto pt-6">
				<div className="font-semibold pb-12">Číslo obj.</div>
				<div className="font-semibold pb-12">Jméno</div>
				<div className="font-semibold pb-12">Místo doručení</div>
				<div className="font-semibold pb-12">Termín doručení</div>
				<div className="font-semibold pb-12">Způsob dopravy</div>
				<div className="font-semibold pb-12">Kontakt na objednávajícího</div>
				<div className="font-semibold pb-12">Stav objednávky</div>
				<div className="font-semibold pb-12">Možnosti objednávky</div>
				{data.orderListItems.map((order) => (
					<Fragment key={order.id}>
						<div className="text-[#0A9DBF] font-semibold underline">
							<Link to={`${order.id}`}>{order.id}</Link>
						</div>

						<div>{order.fullname}</div>
						<div>
							{order.delivery_city},{order.delivery_street}
						</div>
						<div>ASAP</div>
						<div>{order.delivery_type}</div>
						<div>{order.email}</div>
						<div>{order.state}</div>
						<div>
							<button name="process" value={order.id}>
								Zpracovat
							</button>
						</div>
					</Fragment>
				))}
			</div>
		</Form>
	)
}
