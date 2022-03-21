import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration, useLoaderData } from 'remix'

import { MouseEventHandler, useEffect, useState } from 'react'

import translation, { Translator } from './locale/translation'

import styles from './tailwind.css'

export interface OutletContext {
	translator: Translator
	setOrderItem: any
	order: OrderInProgress | Order
	submitOrder: any
	setOrder: (order: OrderInProgress) => void
	editingPerson: number
	setEditingPerson: (key?: number) => void
	switchLanguage: (currentLanguage: string) => MouseEventHandler
}

export type OrderInProgress = Partial<Order> & { persons: Person[] }

export interface Order {
	[key: string]: any
	fullname: string
	phone: string
	email: string
	delivery_type: 'delivery' | 'pickup'
	delivery_fullname?: string
	delivery_street?: string
	delivery_city?: string
	delivery_zip?: string
	delivery_phone?: string
	persons: Person[]
	state: 'open'
	lang: 'ua' | 'cs'
	created_at: {}
	updated_at: {}
}

export type Person = {
	[key: string]: any
	sex: 'man' | 'woman'
	adult: boolean
	fullname: string
	age: string
	clothing_size: string
	shoe_size: string
	requirements: Requirement[]
}

type Requirement = {
	description: string
}

export function links() {
	return [
		{ rel: 'stylesheet', href: styles },
		{ rel: 'icon', href: '/icons/favicon-32x32.png' },
	]
}

export function meta() {
	const description = `Šatník Praha - Pomoc Ukrajině`
	return {
		description,
		keywords: 'ukraine,help,ukrajina,válka',
		name: 'Šatník - Pomoc Ukrajině',
		'twitter:image': 'https://app.satnikpraha.cz/og_share.png',
		'twitter:card': 'summary_large_image',
		'twitter:title': description,
		'twitter:description': 'Pomáháme Ukrajině s Šatníkem Praha',
		'og:url': 'https://app.satnikpraha.cz/',
		'og:type': 'website',
		'og:title': 'Šatník - Pomoc Ukrajině',
		'og:description': 'Šatník Praha - Pomoc Ukrajině',
		'og:image': 'https://app.satnikpraha.cz/og_share.png',
	}
}

function getFromSupported(language: string) {
	return ['ua', 'cs'].includes(language) ? language : 'cs'
}

export const loader = async ({ request }: { request: Request }) => {
	let url = new URL(request.url)
	if (url.searchParams.has('lng')) {
		return getFromSupported(url.searchParams.get('lng') as string)
	}

	// then we use the cookie, using this cookie we can store the user preference with a form
	let cookie = Object.fromEntries(
		request.headers
			.get('Cookie')
			?.split(';')
			.map((cookie) => cookie.split('=')) ?? [],
	)

	if (cookie.i18next) {
		return getFromSupported(cookie.i18next)
	}

	// and then we check the Accept-Language header and use that, this will have the value
	// of the language the user use for their OS
	if (request.headers.has('accept-language')) {
		return getFromSupported(request.headers.get('accept-language') as string)
	}
	return 'cs'
}

export default function App() {
	const locale = useLoaderData()
	const [order, setOrder] = useState({
		delivery_type: 'delivery',
		persons: [],
	} as unknown as Order)
	// const [genderSelected, setCurrentGender] = useState();

	const [translator, setTranslator] = useState<Translator>({
		translate: translation(locale),
		language: locale,
	})

	const setOrderItem = (key: keyof Order, value: any) => {
		const newOrder = Object.assign({}, order) as Order
		newOrder[key] = value
		setOrder(newOrder)
	}

	const switchLanguage =
		(currentLanguage: string): MouseEventHandler =>
		(e) => {
			const newLanguage = currentLanguage == 'cs' ? 'ua' : 'cs'
			setTranslator({
				translate: translation(newLanguage),
				language: newLanguage,
			})
		}

	const [editingPerson, setEditingPerson] = useState<number>()

	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width,initial-scale=1" />
				<Meta />
				<Links />
				<script async src="https://www.googletagmanager.com/gtag/js?id=G-B82SVEWMJ2"></script>
				<script async src="/ga.js"></script>
			</head>
			<body className="bg-[#F8EBDB]">
				<section className="text-[#C6B49D] body-font relative">
					<Outlet
						context={{
							translator,
							setOrderItem,
							order,
							setOrder,
							editingPerson,
							setEditingPerson,
							switchLanguage
						}}
					/>
				</section>

				<ScrollRestoration />
				<Scripts />
				<LiveReload />
			</body>
		</html>
	)
}
