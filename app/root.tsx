import { Links, LiveReload, Meta, MetaFunction, Outlet, Scripts, ScrollRestoration, useLoaderData } from 'remix'

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

export type AuthStrategies = {
	google?: {
		clientID: string
		clientSecret: string
		// allowedAccounts: string[]
	}
}

export type OrderInProgress = Partial<Order> & { persons: Person[] }

export interface Order {
	[key: string]: any
	id: number
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
	assigneeId: number
	state: 'open' | 'in_progress' | 'ready' | 'done'
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

export const meta: MetaFunction = ({ data }) => {
	const { title, description, keywords, image, baseURL } = data.meta
	return {
		description,
		keywords,
		name: title,
		'twitter:image': image,
		'twitter:card': 'summary_large_image',
		'twitter:title': description,
		'twitter:description': description,
		'og:url': baseURL,
		'og:type': 'website',
		'og:title': title,
		'og:description': description,
		'og:image': image,
	}
}

export function scripts() {}

function getFromSupported(language: string) {
	return ['ua', 'cs'].includes(language) ? language : 'cs'
}

export const loader = async ({ request }: { request: Request }) => {
	let url = new URL(request.url)
	const meta = require('config').get('meta')
	if (url.searchParams.has('lng')) {
		return { meta, locale: getFromSupported(url.searchParams.get('lng') as string) }
	}

	// then we use the cookie, using this cookie we can store the user preference with a form
	let cookie = Object.fromEntries(
		request.headers
			.get('Cookie')
			?.split(';')
			.map((cookie) => cookie.split('=')) ?? [],
	)

	if (cookie.i18next) {
		return { meta, locale: getFromSupported(cookie.i18next) }
	}

	// and then we check the Accept-Language header and use that, this will have the value
	// of the language the user use for their OS
	if (request.headers.has('accept-language')) {
		return { meta, locale: getFromSupported(request.headers.get('accept-language') as string) }
	}
	return { locale: 'cs', meta }
}

export default function App() {
	const { locale } = useLoaderData()
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
		<html lang="en" className="overflow-hidden">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width,initial-scale=1" />
				<Meta />
				<Links />
				<script async src="https://www.googletagmanager.com/gtag/js?id=G-B82SVEWMJ2"></script>
				<script async src="/ga.js"></script>
			</head>
			<body className="bg-light font-sans text-medium overflow-hidden">
				<section className="text-brown-500 body-font relative overflow-auto h-[100vh]">
					<Outlet
						context={{
							translator,
							setOrderItem,
							order,
							setOrder,
							editingPerson,
							setEditingPerson,
							switchLanguage,
						}}
					/>
				</section>

				<LiveReload />
				<script src="https://unpkg.com/flowbite@1.4.5/dist/flowbite.js"></script>
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	)
}
