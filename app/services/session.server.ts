import { createCookie, createMemorySessionStorage } from 'remix'

// please note that app is running from build/index.js
process.env["NODE_CONFIG_DIR"] = __dirname + "/../config";
const config = require('config')

const sessionCookie = createCookie("__session", {
	secrets: config.get('session.secrets'),
	sameSite: "lax",
})
export const sessionStorage = createMemorySessionStorage({
	cookie: sessionCookie,
})

export const { getSession, commitSession, destroySession } = sessionStorage;
