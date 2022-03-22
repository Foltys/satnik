import { useState } from 'react'
import {
	useOutletContext,
	useNavigate,
	ActionFunction,
	useActionData,
	json,
	LoaderFunction,
	useLoaderData,
	redirect,
	Form,
} from 'remix'
import GenderSelector from '~/components/GenderSelector'
import PersonOnOrder from '~/components/PersonOnOrder'
import PersonToOrder, { PersonToOrderType } from '~/components/PersonToOrder'
import { OutletContext } from '~/root'
import { getSession, commitSession } from '~/sessions'

/*
- show already added people
- if no people added, show gender select to add 1 person
- if click on add new person, validate inputs and add the person to added people and show gender select again
- after click on gender select, show empty form
*/

type Action = 'submit_contact' | 'select_gender' | 'remove_person' | 'add_person' | 'edit_person' | 'confirm_order'

export type FormWithAction = { _action: Action; [k: string]: any }

export const action: ActionFunction = async ({ request }) => {
	const session = await getSession(request.headers.get('Cookie'))
	const formData = await request.formData()
	let { _action, ...values } = Object.fromEntries(formData) as FormWithAction
	console.log(_action)

	if (_action == 'submit_contact') {
		session.set('contact', values)
	} else if (_action == 'remove_person' && values['id']) {
		const people = session.get('people') as any[]
		people.splice(parseInt(values['id']), 1)
		session.set('people', people)
	} else if (_action == 'add_person') {
		const people = session.get('people') || ([] as PersonToOrderType[])
		people.push({
			age: values.age,
			fullname: values.fullname,
			clothing_size: values.clothing_size,
			requirements: values.requirements,
			shoe_size: values.shoe_size,
			gender: values.gender,
		})
		session.set('people', people)
	} else if (_action == 'edit_person') {
		const people = session.get('people') as PersonToOrderType[]
		const person = people[parseInt(values['id'])]
		people.splice(parseInt(values['id']), 1)
		session.set('people', people)
		values = { editingPerson: person }
	} else if (_action == 'confirm_order') {
		if (values['fullname']) {
			const people = session.get('people') || ([] as PersonToOrderType[])
			people.push({
				age: values.age,
				fullname: values.fullname,
				clothing_size: values.clothing_size,
				requirements: values.requirements,
				shoe_size: values.shoe_size,
				gender: values.gender,
			})
			session.set('people', people)
		}
		return redirect('/order/summary', {
			headers: {
				'Set-Cookie': await commitSession(session),
			},
		})
	}

	return json(values, {
		headers: {
			'Set-Cookie': await commitSession(session),
		},
	})
}

export const loader: LoaderFunction = async ({ request, params }) => {
	const session = await getSession(request.headers.get('Cookie'))
	const response = {} as { [k: string]: any }
	const url = new URL(request.url)
	if (url.searchParams.has('gender')) {
		response.gender = url.searchParams.get('gender')
	}
	if (session.has('people')) {
		response.people = session.get('people')
	}
	return json(response)
}

export default function NewOrder() {
	const { gender, people } = useLoaderData() || {}
	const { editingPerson } = useActionData() || {}
	const { translator } = useOutletContext<OutletContext>()
	return (
		<div className="flex flex-col">
			<div className="w-full mx-auto">
				<div className="flex items-center mb-6 md:mb-12">
					<a href="/">
						<button
							// onClick={() => navigate('/')}
							className="items-center ml-1 mt-1 text-blue border-0 py-2 px-4 focus:outline-none outline  outline-blue rounded-full  font-bold text-lg hover:bg-red hover:text-light hover:outline-red fill-blue hover:fill-light"
						>
							<svg width="16" height="18" xmlns="http://www.w3.org/2000/svg">
								<path d="m.293 8.293 4-4a1 1 0 1 1 1.414 1.414L3.415 8H15a1 1 0 1 1 0 2H3.415l2.294 2.294a1 1 0 1 1-1.414 1.414l-4-4a.997.997 0 0 1-.002-1.414Z" />
							</svg>
						</button>
						<h1 className="sm:text-3xl text-2xl font-bold title-font text-gray-900 ml-6">
							{translator.translate('order')}
						</h1>
					</a>
				</div>
			</div>

			{people?.length ? (
				people.map((item: PersonToOrderType, key: number) => {
					return <PersonOnOrder key={key} details={item} id={key} translator={translator} />
				})
			) : (
				<div className="text-blue font-medium my-5">{translator.translate('who_is_wearing')}</div>
			)}
			{!gender && !editingPerson?.gender ? (
				<>
					<GenderSelector translator={translator} />
					<Form id="person_to_order" method="post" />
				</>
			) : (
				<PersonToOrder
					translator={translator}
					selectedGender={gender || editingPerson.gender}
					editingPerson={editingPerson}
				/>
			)}
			<nav className="p-4 w-full flex flex-wrap gap-8 justify-center fixed bottom-0 inset-x-0 bg-light">
				{gender || editingPerson ? (
					<button
						form="person_to_order"
						name="_action"
						value="add_person"
						className="items-center border-0 py-2 px-4 focus:outline-none outline  rounded-full  font-bold text-lg bg-red disabled:bg-red text-light outline-red hover:text-red hover:bg-light disabled:opacity-20 disabled:text-light disabled:outline-red"
					>
						{translator.translate('add_person')}
					</button>
				) : null}

				{gender || people?.length > 0 || editingPerson ? (
					<button
						form="person_to_order"
						name="_action"
						value="confirm_order"
						className="text-blue disabled:text-blue border-0 py-2 px-4 focus:outline-none outline  outline-blue disabled:outline-blue rounded-full  font-bold text-lg hover:bg-red disabled:bg-light hover:text-light hover:outline-red disabled:opacity-20"
					>
						{translator.translate('to_confirm')}
					</button>
				) : null}
			</nav>
		</div>
	)
}
