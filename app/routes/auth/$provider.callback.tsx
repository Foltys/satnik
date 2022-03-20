import { LoaderFunction } from 'remix'
import { authenticator } from '~/server/auth.server'

export let loader: LoaderFunction = ({ request, params }) => {
	return authenticator.authenticate(params.provider as string, request, {
		successRedirect: '/admin',
		failureRedirect: '/login',
	})
}
