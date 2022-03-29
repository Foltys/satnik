import { useState } from 'react'
import { Translator } from '~/locale/translation'

type DeliveryInfoParams = {
	translator: Translator
	getDefaultValue: (key: string) => string
}

export default function DeliveryInfo({ translator, getDefaultValue }: DeliveryInfoParams) {
	const [delivery, setDelivery] = useState(['', 'delivery'].includes(getDefaultValue('delivery_type')))
	return (
		<div className="w-full mx-auto mt-14">
			<div className="flex flex-col md:mb-12">
				<h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-gray-900 ml-1">
					{translator.translate('delivery_address')}
				</h1>
			</div>
			<div className="flex flex-wrap mb-16 md:mb-12">
				<div className="flex flex-col md:flex-row text-blue p-2 leading-7 font-bold text-base">
					<div className="relative mb-2 ml-1 mr-2">
						<input
							className="accent-blue mr-1"
							type="radio"
							id="radiodelivery"
							name="delivery_type"
							value="delivery"
							defaultChecked={delivery}
							onChange={(e) => {
								setDelivery(e.currentTarget.checked)
							}}
						/>
						<label htmlFor="radiodelivery">{translator.translate('deliver_to_adress')}</label>
					</div>
					<div className="relative mb-2 ml-1 mr-2">
						<input
							className="accent-blue mr-1"
							type="radio"
							id="radiopickup"
							name="delivery_type"
							value="pickup"
							defaultChecked={!delivery}
							onChange={(e) => {
								setDelivery(!e.currentTarget.checked)
							}}
						/>
						<label htmlFor="radiopickup">{translator.translate('pickup')}</label>
					</div>
				</div>
				{delivery ? (
					<>
						<div className="p-2 w-full">
							<div className="relative my-2 mx-1">
								<label htmlFor="name" className="leading-7 font-bold text-base text-gray-900">
									{translator.translate('name_and_surname')}
								</label>
								<input
									type="text"
									id="name"
									autoComplete="name"
									name="delivery_fullname"
									placeholder="Aa"
									required
									className="w-full mt-1 bg-white bg-opacity-80 rounded-xl border border-brown-600 focus:border-white focus:bg-white focus:ring-2 focus:ring-blue text-base outline-none text-gray-900 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out invalid:border-red-500  valid:border-blue placeholder:text-brown-500"
									defaultValue={decodeURIComponent(getDefaultValue('delivery_fullname'))}
								/>
							</div>
							<div className="text-sm flex  text-brown-600">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-4 w-4 mr-2"
									viewBox="0 0 20 20"
									fill="currentColor"
								>
									<path
										fillRule="evenodd"
										d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
										clipRule="evenodd"
									/>
								</svg>
								{translator.translate('picker_name')}
							</div>
						</div>
						<div className="p-2 w-full">
							<div className="relative my-2 mx-1">
								<label htmlFor="street" className="leading-7 font-bold text-base text-gray-900">
									{translator.translate('street_and_number')}
								</label>
								<input
									type="text"
									id="street"
									name="delivery_street"
									required
									autoComplete="street-address"
									placeholder="Strašnická 12"
									className="w-full mt-1 bg-white bg-opacity-80 rounded-xl border border-brown-600 focus:border-white focus:bg-white focus:ring-2 focus:ring-blue text-base outline-none text-gray-900 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out invalid:border-red-500  valid:border-blue placeholder:text-brown-500"
									defaultValue={decodeURIComponent(getDefaultValue('delivery_street'))}
								/>
							</div>
						</div>
						<div className="p-2 w-full">
							<div className="relative my-2 mx-1">
								<label htmlFor="city" className="leading-7 font-bold text-base text-gray-900">
									{translator.translate('city')}
								</label>
								<input
									type="text"
									id="city"
									name="delivery_city"
									placeholder="Praha"
									required
									autoComplete="address-level2"
									className="w-full mt-1 bg-white bg-opacity-80 rounded-xl border border-brown-600 focus:border-white focus:bg-white focus:ring-2 focus:ring-blue text-base outline-none text-gray-900 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out invalid:border-red-500  valid:border-blue placeholder:text-brown-500"
									defaultValue={decodeURIComponent(getDefaultValue('delivery_city'))}
								/>
							</div>
						</div>
						<div className="p-2 w-1/2">
							<div className="relative my-2 mx-1">
								<label htmlFor="city" className="leading-7 font-bold text-base text-gray-900">
									{translator.translate('zip')}
								</label>
								<input
									type="text"
									id="psc"
									name="delivery_zip"
									placeholder="14000"
									required
									autoComplete="postal-code"
									className="w-full mt-1 bg-white bg-opacity-80 rounded-xl border border-brown-600 focus:border-white focus:bg-white focus:ring-2 focus:ring-blue text-base outline-none text-gray-900 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out invalid:border-red-500  valid:border-blue placeholder:text-brown-500"
									defaultValue={getDefaultValue('delivery_zip')}
								/>
							</div>
						</div>
						<div className="p-2 w-full">
							<div className="relative my-2 mx-1">
								<div className="flex">
									<label htmlFor="phone2" className="leading-7 grow font-bold text-base text-gray-900">
										{translator.translate('phone')}
									</label>
									<span className="text-brown-600 font-bold text-sm">{translator.translate('optional')}</span>
								</div>
								<input
									type="tel"
									id="phone2"
									name="delivery_phone"
									placeholder="+380 111 111 111"
									autoComplete="tel"
									className="w-full mt-1 bg-white bg-opacity-80 rounded-xl border border-brown-600 focus:border-white focus:bg-white focus:ring-2 focus:ring-blue text-base outline-none text-gray-900 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out invalid:border-red-500  valid:border-blue placeholder:text-brown-500"
									defaultValue={getDefaultValue('delivery_phone')}
								/>
							</div>
							<div className="text-sm flex  text-brown-600">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-4 w-4 mx-1"
									viewBox="0 0 20 20"
									fill="currentColor"
								>
									<path
										fillRule="evenodd"
										d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
										clipRule="evenodd"
									/>
								</svg>
								{translator.translate('phone_if_other')}
							</div>
						</div>
					</>
				) : (
					<div className="p-2 w-full">
						<div className="relative my-2 mx-1 bg-blue text-xl flex flex-col text-light font-bold p-5 md:w-2/3 ">
							<span>Hala 13 v Pražské tržnici</span>
							<span>Bubenské nábřeží 306</span>
							<span>170 00 Praha 7</span>

							<a className="mt-5" href="tel:+420737597070">
								Mobil: 737 59 70 70
							</a>
							<a href="mailto:info@satnikpraha.cz">E-mail: info@satnikpraha.cz</a>
							<a href="https://goo.gl/maps/o6Z8qzkG6pnTRs7P8" target="_blank" rel="noreferrer">
								<button className="w-44 text-base mt-10 text-light border-0 py-2 px-3 focus:outline-none outline  outline-light rounded-full  hover:text-red hover:bg-light  hover:outline-light font-bold transition-colors duration-200 ease-in-out">
									{translator.translate('show_on_map')}
								</button>
							</a>
						</div>
					</div>
				)}
			</div>
			<nav className="p-4 w-full flex flex-wrap gap-8 justify-center fixed  bottom-0 inset-x-0 bg-light">
				<button
					type={'submit'}
					name={'_action'}
					value={'submit_contact'}
					className="inline-flex items-center text-blue border-0 py-4 px-6 focus:outline-none outline  outline-blue disabled:outline-red disabled:bg-red disabled:text-white disabled:opacity-20 rounded-full md:text-xl hover:bg-red hover:text-white hover:outline-red transition-colors duration-200 ease-in-out"
				>
					{translator.translate('continue_to_cloth_selection')}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6 ml-2"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						strokeWidth={2}
					>
						<path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
					</svg>
				</button>
			</nav>
		</div>
	)
}
