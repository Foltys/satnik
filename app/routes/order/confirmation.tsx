import { getOrderByID, saveNewOrder } from '../../../prisma/api/Order'
import { ActionFunction, json, useOutletContext } from 'remix'
import { sendOrderConfirm, sendOrderConfirmCompany } from '~/mailer/html/api'
import { Order, OutletContext } from '~/root'
import { commitSession, getSession } from '~/sessions'
import { PersonToOrderType } from '~/components/PersonToOrder'

export const action: ActionFunction = async ({ request }) => {
	const formData = await request.formData()
	const { lang } = Object.fromEntries(formData)
	const session = await getSession(request.headers.get('Cookie'))
	const contact = session.get('contact')
	const people = session.get('people')
	// prepare order
	const order = {
		...contact,
		persons: people.map((person: PersonToOrderType) => {
			return {
				sex: person.gender != 'kid' ? person.gender : person.sex,
				adult: person.gender != 'kid',
				fullname: person.fullname,
				age: person.age,
				clothing_size: person.clothing_size,
				shoe_size: person.shoe_size,
				requirements: [{ description: person.requirements }],
			}
		}),
		lang,
	} as Order
	// const preparedOrder = {} as Order
	const { id } = await saveNewOrder(order)
	const orderToSend = (await getOrderByID(id)) as any as Order
	await Promise.all([sendOrderConfirm(orderToSend), sendOrderConfirmCompany(orderToSend)])
	session.unset('contact')
	session.unset('people')
	return json(
		{},
		{
			headers: {
				'Set-Cookie': await commitSession(session),
			},
		},
	)
}

export default function Confirmation() {
	const { translator } = useOutletContext<OutletContext>()

	return (
		<section className="text-gray-900 body-font relative">
			<div className="flex flex-col w-full">
				<div className="w-full md:w-2/3 mx-auto">
					<div className="w-full mx-auto">
						<div className="flex flex-col md:mb-12">
							<h1 className="text-3xl md:text-5xl font-bold title-font my-12 text-red ml-1">
								{translator.translate('order_success')}
							</h1>
						</div>
					</div>
					<div className="w-full mx-auto text-lg font-bold text-red ml-1 ">
						{translator.translate('volunteer_info')}
					</div>
					<div className="w-full mx-auto text-xl my-12 mb-6 bg-red text-light py-6 px-4 ml-1">
						{translator.translate('wait_for_email')}
					</div>

					<h1 className="text-2xl md:text-3xl font-bold title-font my-2 pt-6 text-blue ml-1">
						{translator.translate('share')}
					</h1>

					<span className="inline-flex mt-8 justify-center space-x-8 md:space-x-12">
						<a
							className="text-red"
							href="http://www.facebook.com/share.php?u=https://app.satnikpraha.cz"
							target="_blank"
							rel="noreferrer"
						>
							<svg
								fill="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								className="w-5 h-5 md:w-10 md:h-10"
								viewBox="0 0 24 24"
							>
								<path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
							</svg>
						</a>
						<a
							className="ml-3 text-red"
							href="https://twitter.com/intent/tweet?ref_src=twsrc%5Etfw&quot%3B%20class=&quot%3Btwitter-share-button=&quot%3B%20data-show-count=&quot%3Bfalse=&quot=&url=https://app.satnikpraha.cz"
							target="_blank"
							rel="noreferrer"
						>
							<svg
								fill="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								className="w-5 h-5 md:w-10 md:h-10"
								viewBox="0 0 24 24"
							>
								<path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
							</svg>
						</a>
						<a
							className="ml-3 text-red"
							href="https://t.me/share/url?url=https://app.satnikpraha.cz&text='Satnik Praha - App for Ukraine'"
							target="_blank"
							rel="noreferrer"
						>
							<svg
								fill="currentColor"
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="0"
								className="w-5 h-5 md:w-10 md:h-10"
								viewBox="0 0 24 24"
							>
								<path d="m 20.976681,3.6989569 c -0.272373,1.127e-4 -0.560741,0.096771 -0.560741,0.096771 0,-1e-7 -18.1994369,6.5412791 -19.2388313,7.2657631 -0.22424878,0.155533 -0.29954928,0.246259 -0.33670928,0.352617 -0.1805202,0.515773 0.38045508,0.743677 0.38045508,0.743677 l 4.6913953,1.527123 a 0.51417094,0.51417094 0 0 0 0.03844,-0.0027 l 2.200542,6.089932 c 0,0 0.19588,0.399897 0.436131,0.539531 0.15254,0.125393 0.467062,0.06333 1.110876,-0.580625 1.0105232,-1.010751 1.9809812,-1.847696 2.4656672,-2.254892 1.618765,1.117417 3.345295,2.340922 4.097515,2.987964 a 1.302246,1.302246 0 0 0 0.949149,0.367199 c 0.71103,-0.02675 0.909381,-0.807307 0.909381,-0.807307 0,0 3.317229,-13.3476284 3.428072,-15.1360141 0.01105,-0.1750744 0.02509,-0.2865139 0.02651,-0.4069677 A 1.4987843,1.4987843 0 0 0 21.53477,4.0674814 0.44305197,0.44305197 0 0 0 21.232527,3.7374001 c -0.07576,-0.028792 -0.165055,-0.038481 -0.255846,-0.038443 z" />
							</svg>
						</a>
					</span>
				</div>
			</div>
		</section>
	)
}
