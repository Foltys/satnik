import type { LoaderFunction, LinksFunction } from 'remix'
import { json, Form } from 'remix'
import { useLoaderData, Link } from 'remix'
import { db } from '~/db.server'

type LoaderData = {
	orderListItems: Array<{ id: number; fullname: string }>
}

export const loader: LoaderFunction = async ({ request }) => {
	const orderListItems = await db.order.findMany({
		take: 5,
		select: { id: true, fullname: true },
		//where: { lang: "ua" },
		orderBy: { created_at: 'desc' },
	})

	const data: LoaderData = {
		orderListItems,
	}
	return json(data)
}

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
				<div key={order.id}>
					<Link to={`${order.id}`}>{order.id}</Link>
				</div>
			))}
		</div>
	)
}
