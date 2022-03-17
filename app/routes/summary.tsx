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
		Object.assign(fullOrder, { lang: translator.language })
	}, [translator.language])
	return (
		<div className="flex flex-col">
			{order.persons && order.persons.length ? (
				order.persons.map((item, key) => {
					return (
						<PersonOnOrder key={key} details={item} editItem={() => setEditingPerson(key)} translator={translator} />
					)
				})
			) : (
				<div className="text-[#0A9DBF] font-medium my-5">error</div>
			)}
			<div className="flex">
				<div className="flex flex-col w-1/2 px-1">
					<span className="font-semibold mt-4">{translator.translate('orderer')}</span>
					<span>Olena Kyashenko</span>
					<span>+38 0503 20 20 46</span>
					<span>Olena.K@gmail.com</span>
					<span className="font-semibold mt-4">{translator.translate('delivery_address')}</span>
					<span>Jakub Hertl</span>
					<span>U Uranie 27, Praha 7</span>
					<span>17000</span>
					<span>+420 776 764 221</span>
				</div>
				<div className="flex flex-col w-1/2">
					<span className="font-semibold mt-4">{translator.translate('for_who_and_what')}</span>
					{order.persons.map((person, index) => {
						return (
							<div key={index}>
								<span>{person.fullname}</span>
								<span>{person.requirements[0]?.description}</span>
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
