import React, { MouseEventHandler } from 'react'
import { Form, useNavigate } from 'remix'
import { Translator } from '~/locale/translation'
import { Person } from '~/root'

type PersonToOrderProps = {
	translator: Translator
	selectedGender: 'man' | 'woman' | 'kid'
	editingPerson?: PersonToOrderType
}

export type PersonToOrderType = {
	id?: number
	age: string
	fullname: string
	requirements: string
	clothing_size: string
	shoe_size: string
	gender: string
	sex?: string
}

export default function PersonToOrder({ translator, selectedGender, editingPerson }: PersonToOrderProps) {
	const isKid = selectedGender == 'kid'
	return (
		<Form id="person_to_order" method="post">
			{editingPerson && <input type="hidden" name="id" value={editingPerson.id} />}
			<input type="hidden" name="gender" value={selectedGender} />
			<div className="flex flex-col text-gray-900 mb-16 md:mb-12">
				<div className="flex">
					<div className="rounded-2xl group bg-blue text-light w-full h-80 p-2 border border-blue flex flex-col hover:bg-light items-center">
						<img src={`/${selectedGender}.svg`} alt="man" className="my-4 " />
						<span className="text-2xl font-bold group-hover:text-blue">{translator.translate(selectedGender)}</span>
						<button
							formNoValidate
							name="_action"
							value="remove_person"
							className="font-bold group-hover:text-blue mt-4 border-0 py-2 px-5 outline outline-light group-hover:outline-blue rounded-full"
						>
							{translator.translate('remove')}
						</button>
					</div>
				</div>
				{isKid && (
					<div className="flex">
						<div className="flex mx-3 my-6 font-bold space-x-2 text-blue items-center">
							<input required className="accent-blue" type="radio" id="boy" name="sex" value="man" defaultChecked />
							<label htmlFor="boy">{translator.translate('boy')}</label>
							<input required className="accent-blue" type="radio" id="girl" name="sex" value="woman" />
							<label htmlFor="girl">{translator.translate('girl')}</label>
						</div>
					</div>
				)}
				<div className="flex gap-x-5 md:gap-x-7">
					<div className="py-2 w-1/5">
						<div className="my-2">
							<label htmlFor="name" className="leading-7 font-bold text-base text-gray-900">
								{translator.translate('age')}
							</label>
							<input
								required
								type="number"
								id="age"
								name="age"
								placeholder="22"
								autoComplete="number"
								defaultValue={editingPerson?.age}
								className=" autofill:bg-white w-full mt-1 bg-white bg-opacity-80 rounded-xl border border-brown-600 focus:border-white focus:bg-white focus:ring-2 focus:ring-blue text-base outline-none py-2 px-3 leading-8 transition-colors duration-200 ease-in-out invalid:border-red-500  valid:border-blue  placeholder:text-brown-500"
							/>
						</div>
					</div>
					<div className="py-2 w-4/5">
						<div className="my-2">
							<label htmlFor="name" className="leading-7 font-bold text-base text-gray-900">
								{translator.translate('name')}
							</label>
							<input
								required
								type="text"
								id="fullname"
								name="fullname"
								placeholder="Aa"
								autoComplete="name"
								defaultValue={editingPerson?.fullname}
								className="w-full mt-1 bg-white bg-opacity-80 rounded-xl border border-brown-600 focus:border-white focus:bg-white focus:ring-2 focus:ring-blue text-base outline-none text-gray-900 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out invalid:border-red-500  valid:border-blue  placeholder:text-brown-500"
							/>
						</div>
					</div>
				</div>
				<div className="w-full mx-auto">
					<div className="flex flex-col md:mb-12">
						<h1 className="sm:text-3xl text-2xl font-bold title-font my-4 text-gray-900 ml-1">
							{translator.translate('select_clothes')}
						</h1>
					</div>
				</div>
				<div className="flex flex-col">
					<div className="py-2 w-full">
						<div className="my-2">
							<label htmlFor="name" className="leading-7 font-bold text-base text-gray-900">
								{translator.translate('what_do_you_need')}
							</label>
							<textarea
								id="requirements"
								name="requirements"
								minLength={5}
								required
								placeholder="5 ks trika, 2 ks kalhoty"
								defaultValue={editingPerson?.requirements}
								className="w-full mt-1 bg-white bg-opacity-80 rounded-xl border border-brown-600 focus:border-white focus:bg-white focus:ring-2 focus:ring-blue text-base outline-none text-gray-900 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out invalid:border-red-500  valid:border-blue  placeholder:text-brown-500"
							/>
						</div>
					</div>
					<div className="grid grid-cols-2 gap-x-5 md:gap-x-7">
						<div>
							<label htmlFor="name" className="leading-7 font-bold text-base text-gray-900 mb-1 ">
								{translator.translate('cloth_size')}
							</label>
						</div>
						<div>
							<label htmlFor="name" className="leading-7 font-bold text-base text-gray-900 mb-1">
								{translator.translate('shoes_size')}
							</label>
						</div>
						<div>
							<input
								required
								type="text"
								id="clothing_size"
								name="clothing_size"
								placeholder="S"
								autoComplete="text"
								defaultValue={editingPerson?.clothing_size}
								className="w-full mt-1 bg-white bg-opacity-80 rounded-xl border border-brown-600 focus:border-white focus:bg-white focus:ring-2 focus:ring-blue text-base outline-none text-gray-900 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out invalid:border-red-500  valid:border-blue  placeholder:text-brown-500"
							/>
						</div>
						<div>
							<input
								required
								type="number"
								id="shoe_size"
								name="shoe_size"
								placeholder="44"
								autoComplete="number"
								defaultValue={editingPerson?.shoe_size}
								className="w-full mt-1 bg-white bg-opacity-80 rounded-xl border border-brown-600 focus:border-white focus:bg-white focus:ring-2 focus:ring-blue text-base outline-none text-gray-900 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out invalid:border-red-500  valid:border-blue  placeholder:text-brown-500"
							/>
						</div>
					</div>
				</div>
			</div>
		</Form>
	)
}
