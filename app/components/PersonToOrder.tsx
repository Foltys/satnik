import React, { MouseEventHandler } from 'react'
import { Translator } from '~/locale/translation'
import { Person } from '~/root'

type PersonToOrderProps = {
	translator: Translator
	selectedGender: 'man' | 'woman' | 'kid'
	handleInputChange: React.ChangeEventHandler
	currentPerson: Person
	discardPerson: MouseEventHandler
}

export default function PersonToOrder({
	translator,
	selectedGender,
	handleInputChange,
	currentPerson,
	discardPerson,
}: PersonToOrderProps) {
	const isKid = selectedGender == 'kid'
	return (
		<div className="flex flex-col text-gray-800 mb-16 md:mb-12">
			<div className="flex">
				<div className="rounded-2xl group bg-[#0A9DBF] text-[#F8EBDB] w-full h-80 p-2 border border-[#0A9DBF] flex flex-col hover:bg-[#F8EBDB] items-center">
					<img src={`${selectedGender}.svg`} alt="man" className="my-4 " />
					<span className="text-2xl font-bold group-hover:text-[#0A9DBF]">{translator.translate(selectedGender)}</span>
					<button
						onClick={discardPerson}
						className="font-semibold group-hover:text-[#0A9DBF] mt-4 border-0 py-2 px-5 outline outline-[#F8EBDB] group-hover:outline-[#0A9DBF] rounded-full"
					>
						{translator.translate('remove')}
					</button>
				</div>
			</div>
			{isKid && (
				<div className="flex">
					<div className="flex mx-3 my-6 font-bold space-x-2 text-[#0A9DBF] items-center">
						<input
							required
							className="accent-[#0A9DBF]"
							type="radio"
							id="boy"
							name="sex"
							value="man"
							defaultChecked={currentPerson.sex == 'man'}
							onChange={handleInputChange}
						/>
						<label htmlFor="boy">{translator.translate('boy')}</label>
						<input
							required
							className="accent-[#0A9DBF]"
							type="radio"
							id="girl"
							name="sex"
							value="woman"
							defaultChecked={currentPerson.sex == 'woman'}
							onChange={handleInputChange}
						/>
						<label htmlFor="girl">{translator.translate('girl')}</label>
					</div>
				</div>
			)}
			<div className="flex">
				<div className="py-2 w-1/5">
					<div className="relative my-2 mx-1">
						<label htmlFor="name" className="leading-7 font-semibold text-base text-gray-800">
							{translator.translate('age')}
						</label>
						<input
							required
							type="text"
							id="age"
							name="age"
							placeholder="22"
							autoComplete="number"
							className=" autofill:bg-white w-full mt-1 bg-white bg-opacity-80 rounded-xl border border-[#957D5E] focus:border-white focus:bg-white focus:ring-2 focus:ring-[#0A9DBF] text-base outline-none py-2 px-3 leading-8 transition-colors duration-200 ease-in-out invalid:border-red-500  valid:border-[#0A9DBF]  placeholder:text-[#C6B49D]"
							defaultValue={currentPerson.age}
							onChange={handleInputChange}
						/>
					</div>
				</div>
				<div className="py-2 w-4/5">
					<div className="relative my-2 mx-1">
						<label htmlFor="name" className="leading-7 font-semibold text-base text-gray-800">
							{translator.translate('name')}
						</label>
						<input
							required
							type="text"
							id="name"
							name="fullname"
							placeholder="Aa"
							autoComplete="name"
							className="w-full mt-1 bg-white bg-opacity-80 rounded-xl border border-[#957D5E] focus:border-white focus:bg-white focus:ring-2 focus:ring-[#0A9DBF] text-base outline-none text-gray-800 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out invalid:border-red-500  valid:border-[#0A9DBF]  placeholder:text-[#C6B49D]"
							defaultValue={currentPerson.fullname}
							onChange={handleInputChange}
						/>
					</div>
				</div>
			</div>
			<div className="w-full mx-auto">
				<div className="flex flex-col md:mb-12">
					<h1 className="sm:text-3xl text-2xl font-bold title-font my-4 text-gray-800 ml-1">
						{translator.translate('select_clothes')}
					</h1>
				</div>
			</div>
			<div className="flex flex-col">
				<div className="py-2 w-full">
					<div className="relative my-2 mx-1">
						<label htmlFor="name" className="leading-7 font-semibold text-base text-gray-800">
							{translator.translate("what_do_you_need")}
						</label>
						<textarea
							id="requirements"
							name="requirements"
							minLength={5}
							required
							placeholder="5 ks trika, 2 ks kalhoty"
							className="w-full mt-1 bg-white bg-opacity-80 rounded-xl border border-[#957D5E] focus:border-white focus:bg-white focus:ring-2 focus:ring-[#0A9DBF] text-base outline-none text-gray-800 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out invalid:border-red-500  valid:border-[#0A9DBF]  placeholder:text-[#C6B49D]"
							defaultValue={currentPerson.requirements[0]?.description}
							onChange={handleInputChange}
						/>
					</div>
				</div>
				<div className="flex">
					<div className="py-2 w-2/5">
						<div className="relative my-2 mx-1">
							<label htmlFor="name" className="leading-7 font-semibold text-base text-gray-800">
								{translator.translate('cloth_size')}
							</label>
							<input
								required
								type="text"
								id="clothing_size"
								name="clothing_size"
								placeholder="S"
								autoComplete="text"
								className="w-full mt-1 bg-white bg-opacity-80 rounded-xl border border-[#957D5E] focus:border-white focus:bg-white focus:ring-2 focus:ring-[#0A9DBF] text-base outline-none text-gray-800 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out invalid:border-red-500  valid:border-[#0A9DBF]  placeholder:text-[#C6B49D]"
								defaultValue={currentPerson.clothing_size}
								onChange={handleInputChange}
							/>
						</div>
					</div>
					<div className="py-2 w-2/5">
						<div className="relative my-2 mx-1">
							<label htmlFor="name" className="leading-7 font-semibold text-base text-gray-800">
								{translator.translate('shoes_size')}
							</label>
							<input
								required
								type="text"
								id="shoe_size"
								name="shoe_size"
								placeholder="44"
								autoComplete="number"
								className="w-full mt-1 bg-white bg-opacity-80 rounded-xl border border-[#957D5E] focus:border-white focus:bg-white focus:ring-2 focus:ring-[#0A9DBF] text-base outline-none text-gray-800 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out invalid:border-red-500  valid:border-[#0A9DBF]  placeholder:text-[#C6B49D]"
								defaultValue={currentPerson.shoe_size}
								onChange={handleInputChange}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
