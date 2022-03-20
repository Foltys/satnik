import { createCookieSessionStorage } from 'remix'

// please note that app is running from build/index.js
process.env["NODE_CONFIG_DIR"] = __dirname + "/../config";
const config = require('config')

export const sessionStorage = createCookieSessionStorage({
	cookie: {
		name: "_session", // use any name you want here
		sameSite: "lax", // this helps with CSRF
		path: "/", // remember to add this so the cookie will work in all routes
		httpOnly: true, // for security reasons, make this cookie http only
		secrets: config.get('session.secrets'), // replace this with an actual secret
		secure: process.env.NODE_ENV === "production"
	},
});

export const { getSession, commitSession, destroySession } = sessionStorage;
