import { FormEventHandler, useEffect, useState } from 'react'
import { useOutletContext, useNavigate, Link, useSubmit, redirect, Form } from 'remix'
import { Order, OutletContext } from '~/root'
import { saveNewOrder, getOrderByID } from '../../../prisma/api/Order'
import { sendOrderConfirm, sendOrderConfirmCompany } from '~/mailer/html/api'
import PersonOnOrder from '~/components/PersonOnOrder'
import { ContactAndDeliveryHasError, NewPersonHasError } from '~/validators/orderValidation'

export async function action({ request }: { request: Request }) {
	const order = (await request.formData()).get('order')
	const { id } = await saveNewOrder(JSON.parse(order as string) as Order)
	const orderToSend = (await getOrderByID(id)) as any as Order
	await Promise.all([
		sendOrderConfirm(orderToSend),
		sendOrderConfirmCompany(orderToSend),
	])
	return redirect('/order/confirmation')
}

export default function Summary() {
	const navigate = useNavigate()
	// const [editingPerson, setEditingPerson] = useState<number>()
	const submit = useSubmit()
	const { translator, order, setEditingPerson } = useOutletContext<OutletContext & {order: Order}>()

	const [fullOrder, setFullOrder] = useState<Order>({ ...order, lang: translator.language })

	const submitForm: FormEventHandler<HTMLFormElement> = (e) => {
		e.preventDefault()
		submit(e.currentTarget)
	}

	function editPerson(key: number) {
		setEditingPerson(key)
		navigate('/newOrder', { replace: true })
	}

	useEffect(() => {
		setFullOrder({ ...order, lang: translator.language })
	}, [translator.language])

	useEffect(() => {
		if (ContactAndDeliveryHasError(order)) {
			navigate('/')
		} else if (!order.persons || !order.persons.length) {
			navigate('/newOrder')
		}
	}, [order, navigate])

	window.onbeforeunload = function() {
		return true;
	};

	return (
		<div className="flex flex-col text-gray-900	">
			{order.persons &&
				order.persons.length &&
				order.persons.map((item, key) => {
					return <PersonOnOrder key={key} details={item} editItem={() => editPerson(key)} translator={translator} />
				})}
			<h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-gray-900">
				{translator.translate('order_check')}
			</h1>
			<Link to="/">
				<span className="underline font-bold text-blue">Upravit kontaktní údaje</span>
			</Link>
			<div className="flex mb-12">
				<div className="flex flex-col w-1/2 px-1">
					<span className="font-semibold mt-4">{translator.translate('orderer')}</span>
					<span>{order.fullname}</span>
					<span>{order.phone}</span>
					<span>{order.email}</span>
					<span className="font-semibold mt-4">{translator.translate('delivery_address')}</span>
					{order.delivery_type === 'pickup' ? (
						<>
							<span>Hala 13 v Pražské tržnici</span>
							<span>Bubenské nábřeží 306</span>
							<span>170 00 Praha 7</span>
							<span>Mobil: 737 59 70 70</span>
							<span>E-mail: info@satnikpraha.cz</span>
						</>
					) : (
						<>
							<span>{order.delivery_fullname}</span>
							<span>
								{order.delivery_street},{order.delivery_city}
							</span>
							<span>{order.delivery_zip}</span>
							<span>{order.delivery_phone}</span>
						</>
					)}
				</div>
				<div className="flex flex-col w-1/2">
					<span className="font-semibold mt-4">{translator.translate('for_who_and_what')}</span>
					{order.persons.map((person, index) => {
						return (
							<div key={index}>
								<div>{person.fullname}</div>
								<div>{person.requirements[0]?.description}</div>
							</div>
						)
					})}
				</div>
			</div>

			<nav className="p-4 w-full flex flex-wrap gap-8 justify-center fixed bottom-0 inset-x-0 bg-light">
				<Form method="post" onSubmit={submitForm}>
					<input id="formData" type={'hidden'} name="order" value={JSON.stringify(fullOrder)} readOnly></input>
					<button className="items-center border-0 py-2 px-4 focus:outline-none outline  rounded-full  font-semibold text-lg bg-red text-light outline-red hover:text-red hover:bg-light">
						{translator.translate('to_order')}
					</button>
				</Form>
			</nav>
		</div>
	)
}
