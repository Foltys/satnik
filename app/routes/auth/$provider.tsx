import { ActionFunction, LoaderFunction, redirect } from 'remix'
import { authenticator } from '~/server/auth.server'

export let loader: LoaderFunction = () => redirect('/login');

export let action: ActionFunction = ({ request, params }) => {
	return authenticator.authenticate(params.provider as string, request)
}
