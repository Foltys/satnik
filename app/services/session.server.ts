import { createCookieSessionStorage } from 'remix'

// please note that app is running from build/index.js
process.env["NODE_CONFIG_DIR"] = __dirname + "/../config";
const config = require('config')

export const sessionStorage = createCookieSessionStorage({
	cookie: {
		name: "_session", // use any name you want here
		sameSite: "strict", // this helps with CSRF
		path: "/", // remember to add this so the cookie will work in all routes
		httpOnly: false, // for security reasons, make this cookie http only
		secrets: ["5Kbrx4jn6G7JGPF"], // replace this with an actual secret
		secure: false
	},
});

export const { getSession, commitSession, destroySession } = sessionStorage;
