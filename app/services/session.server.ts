import { createCookieSessionStorage } from 'remix'
import type { SessionStorage } from 'remix'
import config from 'config'

export const sessionStorage: SessionStorage = createCookieSessionStorage({
	cookie: {
		name: '_session',
		sameSite: 'lax',
		path: '/',
		httpOnly: true,
		secrets: config.get('session.secrets') as string[],
		secure: false,
	},
})

export const { getSession } = sessionStorage
