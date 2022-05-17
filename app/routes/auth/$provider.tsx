import { ActionFunction, LoaderFunction, redirect } from 'remix'
import { authenticator } from '~/server/auth.server'

export let action: ActionFunction = ({ request, params }) => {
	console.log({ request, params })
	return authenticator.authenticate(params.provider as string, request, {
		failureRedirect: '/login',
		successRedirect: '/admin',
	})
}

// export let loader: LoaderFunction = ({ request, params }) => {
// 	return authenticator.authenticate(params.provider as string, request, {
// 		successRedirect: '/admin',
// 		failureRedirect: '/login',
// 	})
// }
