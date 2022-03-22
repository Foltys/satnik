import { MouseEventHandler } from 'react'
import { Link } from 'remix'
import { Translator } from '~/locale/translation'

type HeaderParams = {
	translator: Translator
	switchLanguage: MouseEventHandler<HTMLButtonElement>
}

export default function Header({ translator, switchLanguage }: HeaderParams) {
	return (
		<header className="text-gray-900 body-font  bg-light pb-2">
			<div className="container mx-auto flex flex-wrap flex-row items-center">
				<Link className="flex title-font font-medium items-center text-gray-900 ml-5 md:ml-0" to="/">
					<img src="/red.svg" className="w-16 h-16 md:w-32 md:h-32" alt="Šatník Praha" />
					<span className="ml-3 text-xl hidden">Šatník</span>
				</Link>
				<nav className="ml-auto flex flex-wrap items-center text-base justify-center">
					<a className="mr-5 hover:text-gray-900 hidden" href="/">
						First Link
					</a>
				</nav>
				<button
					onClick={switchLanguage}
					className="justify-center inline-flex items-center text-blue font-bold  border-0 py-2 px-5 focus:outline-red outline outline-offset-2 outline-blue rounded-full text-base mr-5 hover:outline-red"
				>
					{translator.language == 'cs' ? (
						<svg width="25" height="19" viewBox="0 0 25 19" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path fillRule="evenodd" clipRule="evenodd" d="M0 0H25V19H0V0Z" fill="#FFD500" />
							<path fillRule="evenodd" clipRule="evenodd" d="M0 0H25V9.5H0V0Z" fill="#005BBB" />
						</svg>
					) : (
						<svg width="25" height="19" viewBox="0 0 25 19" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M0 0H25V9.5H0V0Z" fill="white" />
							<path d="M0 9.5H25V19H0V9.5Z" fill="#D7141A" />
							<path d="M14.0625 9.5L0 0V19L14.0625 9.5Z" fill="#11457E" />
						</svg>
					)}
					<span className="hidden md:flex ml-2">{translator.translate('language')}</span>
				</button>
			</div>
		</header>
	)
}
