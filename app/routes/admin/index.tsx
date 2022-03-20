import type { LoaderFunction } from 'remix'
import { json, Form } from 'remix'
import { useLoaderData, Link } from 'remix'
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

// fullname: { type: 'string' },
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
		<div className="grid grid-cols-8">
			<div>Číslo obj.</div>
			<div>Jméno</div>
			<div>Místo doručení</div>
			<div>Termín doručení</div>
			<div>Způsob dopravy</div>
			<div>Kontakt na objednávajícího</div>
			<div>Stav objednávky</div>
			<div>Možnosti objednávky</div>
			{data.orderListItems.map((order) => (
				<Fragment key={order.id}>
					<div>
						<Link to={`${order.id}`}>{order.id}</Link>
					</div>

					<div>{order.fullname}</div>
					<div>
						{order.delivery_city},{order.delivery_street}
					</div>
					<div>ASAP</div>
					<div>{order.delivery_type}</div>
					<div>{order.email}</div>
					<div>Nová</div>
					<div>
						<button>Zpracovat</button>
					</div>
				</Fragment>
			))}
		</div>
	)
}
