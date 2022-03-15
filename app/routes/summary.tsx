import { FormEventHandler } from 'react'
import { useOutletContext, useNavigate, Link, useSubmit, redirect, Form } from 'remix'
import { Order, OutletContext } from '~/root'
import { saveNewOrder } from '../../prisma/api/Order'

const orderMock = {
	fullname: 'Olena Shevchenko',
	phone: '777777777',
	email: 'michal.palma@gmail.com',
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
	console.log(await saveNewOrder(JSON.parse(order as string) as Order))
	return redirect('/summary')
}

export default function Summary() {
	const submit = useSubmit()
	const { translator, order } = useOutletContext<OutletContext>()
	const navigate = useNavigate()
	const submitForm: FormEventHandler<HTMLFormElement> = (e) => {
		e.preventDefault()
		console.log('submitting')
		console.log(e)
		submit(e.currentTarget)
		//    odeslat data na server
		//    pokud se to podarilo, zobrazit /confirmation
	}
	return (
		<section className="text-gray-600 body-font relative">
			<div className="container px-5 py-14 md:py-24 mx-auto flex sm:flex-nowrap flex-wrap">
				<div className="lg:w-2/3 md:w-1/2 rounded-lg overflow-hidden sm:mr-10 flex items-start justify-start relative">
					<div className="flex flex-col">
						<div className="w-full mx-auto">
							<div className="flex flex-col md:mb-12">
								<h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-gray-900 ml-1">
									{translator.translate('order')}
								</h1>
							</div>
						</div>
						<div className="flex rounded-2xl group bg-[#eb2f06] text-[#F8EBDB] w-full h-72 p-2 border border-[#eb2f06]">
							<img src="woman.svg" alt="man" className="my-4 mx-2" />
							<div className=" flex flex-col justify-center mx-4">
								<span className="text-2xl font-bold">Olena Kyashenko</span>
								<span className="py-2">{translator.translate('cloth_example')}</span>
								<button className="font-semibold hover:text-[#eb2f06] hover:bg-[#F8EBDB] mt-4 border-0 py-2 px-5 outline outline-[#F8EBDB] rounded-full">
									{translator.translate('edit')}
								</button>
							</div>
						</div>
						<div className="py-2 my-10 mx-2 w-full md:w-1/2">
							<button className="items-center  text-[#0A9DBF] border-0 py-2 px-4 focus:outline-none outline  outline-[#0A9DBF] rounded-full  font-semibold text-lg hover:bg-[#eb2f06] hover:text-[#F8EBDB] hover:outline-[#eb2f06]">
								{translator.translate('add_person')}
							</button>
						</div>
						<hr className="w-full my-4 border border-[#957D5E] opacity-20" />
						<div className="w-full mx-auto">
							<div className="flex flex-col md:mb-12">
								<h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 mt-12 text-gray-900 ml-1">
									{translator.translate('order_check')}
								</h1>
							</div>
						</div>
						<Link to="/?edit" className="text-[#0A9DBF] font-semibold ml-1 underline">
							{translator.translate('edit_contact')}
						</Link>
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
								<span>Olena Kyiaskho</span>
								<span>{translator.translate('cloth_example')}</span>
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
				</div>
				<div className="lg:w-1/3 md:w-1/2 hidden md:flex flex-col md:ml-auto w-full  mt-8 md:mt-0">
					<img
						src="https://images.unsplash.com/photo-1582719188393-bb71ca45dbb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80"
						className="rounded-lg w-full object-cover object-center"
						alt="illustration"
					/>
				</div>
			</div>
		</section>
	)
}
