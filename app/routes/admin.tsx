import { LoaderFunction } from 'remix'
import { json, useLoaderData, Outlet, Link } from 'remix'
import { authenticator } from '~/server/auth.server'

import { User } from '@prisma/client'
import Header from '~/components/admin/Header'

type LoaderData = {
	user: User
}

export const loader: LoaderFunction = async ({ request }) => {
	const config = require('config')
	const authEnabled = config.get('auth.enabled')

	let user
	if (authEnabled) {
		user = (await authenticator.isAuthenticated(request, {
			failureRedirect: '/login',
		})) as User
	}
	return json({ user })
}

export default function Admin() {
	const data = useLoaderData<LoaderData>()

	return (
		<section>
			{data.user && <Header user={data.user} />}
			<div>
				<Outlet context={{ user: data.user }} />
			</div>
		</section>
	)
}
