import { ActionFunction, Form, json, Link, useActionData, useOutletContext } from 'remix'
import { authenticator } from '~/server/auth.server'
import { OAuth2Profile } from 'remix-auth-oauth2'
import { User as PrismaUser } from '@prisma/client'
import { editUserInfo } from '../../../prisma/api/Users'

export const action: ActionFunction = async ({ request }) => {
	const currentUser = (await authenticator.isAuthenticated(request, { failureRedirect: '/login' })) as PrismaUser
	const { email, phone } = Object.fromEntries(await request.formData()) as { email: string; phone: string }
	return json(await editUserInfo(currentUser.id, email, phone))
}

export default function User() {
	const { user } = useOutletContext<{ user: PrismaUser }>()
	return (
		<div className="px-6 py-3 text-gray-900 text-base align-bottom">
			<div className="text-5xl overflow-clip font-bold py-3">{user.name}</div>
			<Form className="flex flex-col py-3" method="post">
				<label htmlFor="email" className="mb-2">
					Email
				</label>
				<input
					className="p-3 rounded-xl border-brown-500 border mb-6"
					id="email"
					type="text"
					disabled={!!user.gmailId}
					defaultValue={user.email}
				/>
				<label htmlFor="phone" className="mb-2">
					Telefon
				</label>
				<input
					className="p-3 rounded-xl border border-brown-500 mb-6"
					id="phone"
					type="text"
					defaultValue={user.phone || ''}
				/>
				<div className="flex flex-row justify-between">
					<button className="py-3 px-6 rounded-3xl border-2 border-blue text-blue">Uložit změny</button>
					<Link to="/logout" className="py-3 px-6 rounded-3xl border-2 border-blue text-blue">
						Odhlásit se
					</Link>
				</div>
			</Form>
		</div>
	)
}
