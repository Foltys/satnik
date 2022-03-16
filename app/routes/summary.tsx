import { FormEventHandler } from 'react'
import { useOutletContext, useNavigate, Link, useSubmit, redirect, Form } from 'remix'
import { Order, OutletContext } from '~/root'
import { saveNewOrder, getOrderByID } from '../../prisma/api/Order'
import { send } from '~/mailer/html/order_confirm/send'

const orderMock = {
	fullname: 'Olena Shevchenko',
	phone: '777777777',
	email: 'folejtar.jakub@gmail.com',
	delivery_type: 'pickup',
	delivery_fullname: 'This is just TESTING Order / Toto je pouze TESTOVACI objednavka',
	delivery_street: 'Jecna 22',
	delivery_city: 'Praha',
	delivery_zip: '12000',
	delivery_phone: '777111111',
	delivery_time: new Date('2022-03-01'),
	persons: [
		{
			sex: 'woman',
			adult: true,
			fullname: 'Anna Koroljenko',
			age: 30,
			clothing_size: 'm',
			shoe_size: '41',
			requirements: [
				{
					description: 'cerna bunda',
				},
				{
					description: 'modre boty',
				},
			],
		},
		{
			sex: 'man',
			adult: false,
			fullname: 'Pavel Koroljenko',
			age: 10,
			clothing_size: 's',
			shoe_size: '30',
			requirements: [
				{
					description: 'nejake kalhoty',
				},
			],
		},
	],
	state: 'open',
	lang: 'cs',
	created_at: new Date(),
	updated_at: new Date(),
}

export async function action({ request }: { request: Request }) {
	const order = (await request.formData()).get('order')
	const { id } = await saveNewOrder(JSON.parse(order as string) as Order)
	console.log(await send(await getOrderByID(id) as Order))
	return redirect('/confirmation')
}

export default function Summary() {
	const submit = useSubmit()
	const { translator, order } = useOutletContext<OutletContext>()
	const submitForm: FormEventHandler<HTMLFormElement> = (e) => {
		e.preventDefault()
		submit(e.currentTarget)
	}
	return (
		<div className="flex flex-col">
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
					<input id="formData" type={'hidden'} name="order" value={JSON.stringify(orderMock)} readOnly></input>
					<button className="items-center border-0 py-2 px-4 focus:outline-none outline  rounded-full  font-semibold text-lg bg-[#eb2f06] text-[#F8EBDB] outline-[#eb2f06] hover:text-[#eb2f06] hover:bg-[#F8EBDB]">
						{translator.translate('to_order')}
					</button>
				</Form>
			</div>
		</div>
	)
}
