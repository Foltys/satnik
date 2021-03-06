import { Translator } from '~/locale/translation'
import { Order, OrderInProgress } from '~/root'

type ContactInfoParams = {
	translator: Translator
	getDefaultValue: (key: string) => string
}

export default function ContactInfo({ translator, getDefaultValue }: ContactInfoParams) {
	return (
		<div className="w-full mx-auto">
			<div className="flex flex-col md:mb-12">
				<h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-gray-900 ml-1">
					{translator.translate('contact')}
				</h1>
			</div>
			<div className="flex flex-wrap -m-2 text-gray-900">
				<div className="p-2 w-full">
					<div className="relative my-2 mx-1">
						<label htmlFor="name" className="leading-7 font-bold text-base text-gray-900">
							{translator.translate('name_and_surname')}
						</label>
						<input
							type="text"
							id="name"
							name="fullname"
							placeholder="Aa"
							required
							onInvalid={(e) => {
								e.currentTarget.setCustomValidity(translator.translate('validation_contact_name'))
							}}
							autoComplete="name"
							className="w-full mt-1 bg-white bg-opacity-80 rounded-xl border border-brown-600 focus:border-white focus:bg-white focus:ring-2 focus:ring-blue text-base outline-none placeholder:text-brown-500 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out invalid:border-red-500  valid:border-blue"
							defaultValue={getDefaultValue('fullname')}
						/>
					</div>
				</div>
				<div className="p-2 w-full">
					<div className="relative my-2 mx-1">
						<label htmlFor="phone" className="leading-7 font-bold text-base text-gray-900">
							{translator.translate('phone')}
						</label>
						<input
							type="tel"
							id="phone"
							name="phone"
							required
							onInvalid={(e) => {
								e.currentTarget.setCustomValidity(translator.translate('validation_contact_phone'))
							}}
							autoComplete="tel"
							placeholder="+380 111 111 111"
							className="w-full mt-1 bg-white bg-opacity-80 rounded-xl border border-brown-600 focus:border-white focus:bg-white focus:ring-2 focus:ring-blue text-base outline-none placeholder:text-brown-500 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out invalid:border-red-500  valid:border-blue "
							defaultValue={getDefaultValue('phone')}
						/>
					</div>
					<div className="text-sm flex  text-brown-600">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mx-1" viewBox="0 0 20 20" fill="currentColor">
							<path
								fillRule="evenodd"
								d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
								clipRule="evenodd"
							/>
						</svg>
						{translator.translate('phone_to_find_you')}
					</div>
				</div>
				<div className="p-2 w-full">
					<div className="relative my-2 mx-1">
						<div className="flex">
							<label htmlFor="email" className="leading-7 grow font-bold text-base text-gray-900">
								{translator.translate('email')}
							</label>
						</div>
						<input
							type="email"
							id="email"
							name="email"
							placeholder="@"
							autoComplete="email"
							required
							// onInvalid={(e) => {
							// 	e.currentTarget.setCustomValidity(translator.translate('validation_contact_email'))
							// }}
							className="w-full mt-1 bg-white bg-opacity-80 rounded-xl border border-brown-600 focus:border-white focus:bg-white focus:ring-2 focus:ring-blue text-base outline-none placeholder:text-brown-500 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out invalid:border-red-500  valid:border-blue"
							defaultValue={getDefaultValue('email')}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}
