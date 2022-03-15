import { MouseEventHandler, useState } from 'react'
import { useOutletContext, useNavigate, Link } from 'remix'
import { OutletContext } from '~/root'

export default function OrderOne() {
	const { translator, setOrderItem } = useOutletContext<OutletContext>()
	const navigate = useNavigate()
	const nextForm: MouseEventHandler = (e) => {
		e.preventDefault()
		//    setOrderItem("něco");
		navigate('/summary', { replace: false })
	}
	const adult = true //je potřeba nastavit jestli je to dítě nebo dospělý
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
						<div className="flex">
							<div className="rounded-2xl group bg-[#0A9DBF] text-[#F8EBDB] w-full h-80 p-2 border border-[#0A9DBF] flex flex-col hover:bg-[#F8EBDB] items-center">
								<img src="woman.svg" alt="man" className="my-4 " />
								<span className="text-2xl font-bold group-hover:text-[#0A9DBF]">{translator.translate('woman')}</span>
								<button className="font-semibold group-hover:text-[#0A9DBF] mt-4 border-0 py-2 px-5 outline outline-[#F8EBDB] group-hover:outline-[#0A9DBF] rounded-full">
									Odebrat
								</button>
							</div>
						</div>
						{!adult && (
							<div className="flex">
								<div className="flex mx-3 my-6 font-bold space-x-2 text-[#0A9DBF] items-center">
									<input className="accent-[#0A9DBF]" type="radio" id="girl" name="kidgenderselector" value="boy" />
									<label htmlFor="boy">{translator.translate('boy')}</label>
									<input className="accent-[#0A9DBF]" type="radio" id="girl" name="kidgenderselector" value="girl" />
									<label htmlFor="girl">{translator.translate('girl')}</label>
								</div>
							</div>
						)}
						<div className="flex">
							<div className="py-2 w-1/5">
								<div className="relative my-2 mx-1">
									<label htmlFor="name" className="leading-7 font-semibold text-base text-gray-600">
										{translator.translate('age')}
									</label>
									<input
										type="text"
										id="name"
										name="name"
										placeholder="22"
										className="w-full mt-1 bg-white bg-opacity-80 rounded-xl border border-[#957D5E] focus:border-white focus:bg-white focus:ring-2 focus:ring-[#0A9DBF] text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
									/>
								</div>
							</div>
							<div className="py-2 w-4/5">
								<div className="relative my-2 mx-1">
									<label htmlFor="name" className="leading-7 font-semibold text-base text-gray-600">
										{translator.translate('name')}
									</label>
									<input
										type="text"
										id="name"
										name="name"
										placeholder="Aa"
										className="w-full mt-1 bg-white bg-opacity-80 rounded-xl border border-[#957D5E] focus:border-white focus:bg-white focus:ring-2 focus:ring-[#0A9DBF] text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
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
								<div className="relative my-2 mx-1">
									<label htmlFor="name" className="leading-7 font-semibold text-base text-gray-600">
										Jaké oblečení potřebujete?
									</label>
									<textarea
										id="name"
										name="name"
										placeholder="5 ks trika, 2 ks kalhoty"
										className="w-full mt-1 bg-white bg-opacity-80 rounded-xl border border-[#957D5E] focus:border-white focus:bg-white focus:ring-2 focus:ring-[#0A9DBF] text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
									/>
								</div>
							</div>
							<div className="flex">
								<div className="py-2 w-2/5">
									<div className="relative my-2 mx-1">
										<label htmlFor="name" className="leading-7 font-semibold text-base text-gray-600">
											{translator.translate('cloth_size')}
										</label>
										<input
											type="text"
											id="name"
											name="name"
											placeholder="S"
											className="w-full mt-1 bg-white bg-opacity-80 rounded-xl border border-[#957D5E] focus:border-white focus:bg-white focus:ring-2 focus:ring-[#0A9DBF] text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
										/>
									</div>
								</div>
								<div className="py-2 w-2/5">
									<div className="relative my-2 mx-1">
										<label htmlFor="name" className="leading-7 font-semibold text-base text-gray-600">
											{translator.translate('shoes_size')}
										</label>
										<input
											type="text"
											id="name"
											name="name"
											placeholder="44"
											className="w-full mt-1 bg-white bg-opacity-80 rounded-xl border border-[#957D5E] focus:border-white focus:bg-white focus:ring-2 focus:ring-[#0A9DBF] text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
										/>
									</div>
								</div>
							</div>
						</div>
						<div className="py-2 my-10 mx-2 w-full md:w-1/2">
							<Link to="/addperson">
								<button className="items-center border-0 py-2 px-4 focus:outline-none outline  rounded-full  font-semibold text-lg bg-[#eb2f06] text-[#F8EBDB] outline-[#eb2f06] hover:text-[#eb2f06] hover:bg-[#F8EBDB]">
									{translator.translate('add_person')}
								</button>
							</Link>
						</div>
						<hr className="w-full my-4 border border-[#957D5E] opacity-20" />
						<div className="py-2 my-10 mx-2">
							<button
								onClick={nextForm}
								className="items-center  text-[#0A9DBF] border-0 py-2 px-4 focus:outline-none outline  outline-[#0A9DBF] rounded-full  font-semibold text-lg hover:bg-[#eb2f06] hover:text-[#F8EBDB] hover:outline-[#eb2f06]"
							>
								{translator.translate('continue')}
							</button>
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
