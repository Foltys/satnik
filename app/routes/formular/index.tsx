import { useState } from 'react'
import { Form, useNavigate, useOutletContext, useLoaderData, LoaderFunction } from 'remix'
import ContactInfo from '~/components/ContactInfo'
import DeliveryInfo from '~/components/DeliveryInfo'
import { OrderInProgress, OutletContext } from '~/root'
import { getSession } from '~/sessions'

export const loader: LoaderFunction = async ({ request }) => {
	const session = await getSession(request.headers.get('Cookie'))
	if (session.has('contact')) {
		return session.get('contact')
	}
	return null
}

export default function Index() {
	const { translator } = useOutletContext<OutletContext>()

	const contactData = useLoaderData<{ [k: string]: string }>()
	const getDefaultValue = (key: keyof OrderInProgress) => {
		if (contactData && contactData[key]) {
			return contactData[key]
		}
		return ''
	}

	return (
		<div className="flex flex-col">
			<Form action="/formular/newOrder" method="post" name="contact">
				<ContactInfo translator={translator} getDefaultValue={getDefaultValue} />
				<DeliveryInfo translator={translator} getDefaultValue={getDefaultValue} />
			</Form>
		</div>
	)
}
