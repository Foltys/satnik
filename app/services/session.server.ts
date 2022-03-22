import { createCookieSessionStorage } from 'remix'
import config from 'config'

export const sessionStorage = createCookieSessionStorage({
	cookie: {
		name: "_session",
		sameSite: "lax",
		path: "/",
		httpOnly: true,
		secrets: config.get('session.secrets'),
		secure: false
	},
});

export const { getSession, commitSession, destroySession } = sessionStorage;
