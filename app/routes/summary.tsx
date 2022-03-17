import { FormEventHandler, useEffect, useState } from 'react'
import { useOutletContext, useNavigate, Link, useSubmit, redirect, Form } from 'remix'
import { Order, OutletContext } from '~/root'
import { saveNewOrder, getOrderByID } from '../../prisma/api/Order'
import { send as send_client } from '~/mailer/html/order_confirm_company/send'
import { send as send_satnik } from '~/mailer/html/order_confirm/send'
import PersonOnOrder from '~/components/PersonOnOrder'

export async function action({ request }: { request: Request }) {
	const order = (await request.formData()).get('order')
	const { id } = await saveNewOrder(JSON.parse(order as string) as Order)
	const orderToSend = (await getOrderByID(id)) as any as Order
	await send_client(orderToSend)
	await send_satnik(orderToSend)
	return redirect('/confirmation')
}

export default function Summary() {
	const [editingPerson, setEditingPerson] = useState<number>()
	const submit = useSubmit()
	const { translator, order } = useOutletContext<OutletContext>()
	const fullOrder = Object.assign({}, { lang: translator.language, delivery_time: new Date() }, order)
	const submitForm: FormEventHandler<HTMLFormElement> = (e) => {
		e.preventDefault()
		submit(e.currentTarget)
	}

	useEffect(() => {
		if (order.persons.length < 1) redirect('/') //not a nice thing to do, not sure what else would work
		Object.assign(fullOrder, { lang: translator.language })
	}, [translator.language])
	return (
		<div className="flex flex-col text-gray-800	">
			{order.persons &&
				order.persons.length &&
				order.persons.map((item, key) => {
					return (
						<PersonOnOrder key={key} details={item} editItem={() => setEditingPerson(key)} translator={translator} />
					)
				})}
			<h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-gray-800 ml-1">
				{translator.translate('order_check')}
			</h1>
			<div className="flex">
				<div className="flex flex-col w-1/2 px-1">
					<span className="font-semibold mt-4">{translator.translate('orderer')}</span>
					<span>{order.fullname}</span>
					<span>{order.phone}</span>
					<span>{order.email}</span>
					<span className="font-semibold mt-4">{translator.translate('delivery_address')}</span>
					<span>{order.delivery_fullname}</span>
					<span>{order.delivery_street},{order.delivery_city}</span>
					<span>{order.delivery_zip}</span>
					<span>{order.delivery_phone}</span>
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

			<hr className="w-full my-10 border border-[#957D5E] opacity-20" />
			<div className="py-2 mx-2 w-full md:w-1/2">
				<Form method="post" onSubmit={submitForm}>
					<input id="formData" type={'hidden'} name="order" value={JSON.stringify(fullOrder)} readOnly></input>
					<button className="items-center border-0 py-2 px-4 focus:outline-none outline  rounded-full  font-semibold text-lg bg-[#eb2f06] text-[#F8EBDB] outline-[#eb2f06] hover:text-[#eb2f06] hover:bg-[#F8EBDB]">
						{translator.translate('to_order')}
					</button>
				</Form>
			</div>
		</div>
	)
}
