import { useState } from 'react'
import { useOutletContext, useNavigate, Link } from 'remix'
import { OutletContext } from '~/root'

export default function Confirmation() {
	const { translator, setOrderItem } = useOutletContext<OutletContext>()
	return (
		<section className="text-gray-800 body-font relative">
			<div className="container px-5 py-14 md:py-24 mx-auto flex sm:flex-nowrap flex-wrap">
				<div className="lg:w-2/3 md:w-1/2 rounded-lg overflow-hidden sm:mr-10 flex items-start justify-start relative">
					<div className="flex flex-col">
						<img
							className="flex rounded-2xl w-full h-72 p-2 "
							src="https://images.unsplash.com/photo-1485286162995-aa63d31c06cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
							alt="delivery"
						/>
						<div className="w-full mx-auto">
							<div className="flex flex-col md:mb-12">
								<h1 className="sm:text-5xl  text-5xl font-bold title-font my-12 text-[#eb2f06] ml-1">
									Úspěšně jste si objednali oblečení
								</h1>
							</div>
						</div>
						<div className="w-full mx-auto text-lg font-semibold text-[#eb2f06] ml-1 ">
							Dobrovolnící dělají, co můžou, aby k vám objednané oblečení co nejdříve dorazilo.
						</div>
						<div className="w-full mx-auto text-xl my-12 mb-6 bg-[#eb2f06] text-[#F8EBDB] py-6 px-4 ml-1">
							Vyčkejte na e-mail s dalšími informacemi.
						</div>
						<span className="inline-flex mt-8 justify-center space-x-8 md:space-x-12">
							<a
								className="text-[#eb2f06]"
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
								className="ml-3 text-[#eb2f06]"
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
								className="ml-3 text-[#eb2f06]"
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
				<div className="lg:w-1/3 md:w-1/2 hidden md:flex flex-col md:ml-auto w-full  mt-8 md:mt-0">
					<img
						src="https://images.unsplash.com/photo-1543499459-d1460946bdc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGRlbGl2ZXJ5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
						className="rounded-lg w-full object-cover object-center"
						alt="illustration"
					/>
				</div>
			</div>
		</section>
	)
}
