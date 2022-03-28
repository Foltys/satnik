import { useOutletContext, Link, redirect, Form, LoaderFunction, json, useLoaderData } from 'remix'
import { Order, OutletContext } from '~/root'
import PersonOnOrder from '~/components/PersonOnOrder'
import { getSession } from '~/sessions'
import { PersonToOrderType } from '~/components/PersonToOrder'

export const loader: LoaderFunction = async ({ request }) => {
	const session = await getSession(request.headers.get('Cookie'))
	const contact = session.get('contact')
	const people = session.get('people')
	if (!contact) {
		console.error('no contact', contact)
		return redirect('/formular')
	}
	if (!people) {
		console.error('no people', people)
		return redirect('/formular/newOrder')
	}
	return json({
		contact,
		people,
	})
}

export default function Summary() {
	const { contact, people } = useLoaderData()
	const { translator } = useOutletContext<OutletContext & { order: Order }>()

	return (
		<div className="flex flex-col text-gray-900	">
			{people.map((item: PersonToOrderType, key: number) => {
				return <PersonOnOrder key={key} details={item} id={key} translator={translator} />
			})}
			<h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-gray-900">
				{translator.translate('order_check')}
			</h1>
			<Link to="/">
				<span className="underline font-bold text-blue">Upravit kontaktní údaje</span>
			</Link>
			<div className="flex mb-12">
				<div className="flex flex-col w-1/2 px-1">
					<span className="font-bold mt-4">{translator.translate('orderer')}</span>
					<span>{decodeURIComponent(contact.fullname)}</span>
					<span>{contact.phone}</span>
					<span>{contact.email}</span>
					<span className="font-bold mt-4">{translator.translate('delivery_address')}</span>
					{contact.delivery_type === 'pickup' ? (
						<>
							<span>Hala 13 v Pražské tržnici</span>
							<span>Bubenské nábřeží 306</span>
							<span>170 00 Praha 7</span>
							<span>Mobil: 737 59 70 70</span>
							<span>E-mail: info@satnikpraha.cz</span>
						</>
					) : (
						<>
							<span>{decodeURIComponent(contact.delivery_fullname)}</span>
							<span>
								{decodeURIComponent(contact.delivery_street)},{decodeURIComponent(contact.delivery_city)}
							</span>
							<span>{contact.delivery_zip}</span>
							<span>{contact.delivery_phone}</span>
						</>
					)}
				</div>
				<div className="flex flex-col w-1/2">
					<span className="font-bold mt-4">{translator.translate('for_who_and_what')}</span>
					{people.map((person: PersonToOrderType, index: number) => {
						return (
							<div key={index}>
								<div>{decodeURIComponent(person.fullname)}</div>
								<div>{decodeURIComponent(person.requirements)}</div>
							</div>
						)
					})}
				</div>
			</div>

			<nav className="p-4 w-full flex flex-wrap gap-8 justify-center fixed bottom-0 inset-x-0 bg-light">
				<Form method="post" action="/formular/confirmation">
					<input type="hidden" name="lang" value={translator.language} />
					<button className="items-center border-0 py-2 px-4 focus:outline-none outline  rounded-full  font-bold text-lg bg-red text-light outline-red hover:text-red hover:bg-light transition-colors duration-200 ease-in-out">
						{translator.translate('to_order')}
					</button>
				</Form>
			</nav>
		</div>
	)
}
