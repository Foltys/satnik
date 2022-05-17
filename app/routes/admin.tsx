import { LoaderFunction, redirect } from 'remix'
import { json, useLoaderData, Outlet, Link } from 'remix'
import { OAuth2Profile } from 'remix-auth-oauth2'
import { authenticator } from '~/server/auth.server'
import { createUserIfNotExists } from '../../prisma/api/Order'
import { User } from '@prisma/client'

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
			{data.user && (
				<header className="text-gray-600 body-font p-3 pt-0">
					<div className="flex justify-between">
						<Link to="/">
							<img src="/icons/favicon-32x32.png" alt="satnik" width={58} height={58}></img>
						</Link>
						<Link className="text-blue text-base rounded-3xl border-2 px-6 py-3 my-auto border-blue" to="user">
							{/* <div className="rounded-3xl border-2 border-blue align-middle text-center"> */}
							{data.user.name}
							{/* </div> */}
						</Link>
					</div>
				</header>
			)}
			<div>
				<Outlet context={{ user: data.user }} />
			</div>
		</section>
	)
}
