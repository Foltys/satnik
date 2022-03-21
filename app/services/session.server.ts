import { createCookieSessionStorage } from 'remix'

// please note that app is running from build/index.js
process.env["NODE_CONFIG_DIR"] = __dirname + "/../config";
const config = require('config')

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
