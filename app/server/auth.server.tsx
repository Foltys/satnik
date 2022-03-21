import { Authenticator } from 'remix-auth'
import { OAuth2Profile } from 'remix-auth-oauth2'
import { GoogleStrategy, SocialsProvider } from 'remix-auth-socials'
import { sessionStorage } from '~/services/session.server'

// please note that app is running from build/index.js
process.env["NODE_CONFIG_DIR"] = __dirname + "/../config";
const config = require('config')

// Create an instance of the authenticator
export let authenticator = new Authenticator(sessionStorage, { sessionKey: '_session' });
// You may specify a <User> type which the strategies will return (this will be stored in the session)
// export let authenticator = new Authenticator<User>(sessionStorage, { sessionKey: '_session' });

const hostname = config.get('hostname')
const strategies = config.get('auth.strategies')

type ValueNode = {
	value: any
}

function validateAccount(profile: OAuth2Profile, allowedAccounts: string[]): boolean {
	if (!profile.emails) {
		return false
	}
	for (const emailNode of profile.emails) {
		for (const email of allowedAccounts) {
			if (emailNode.value === email) {
				return true
			}
		}
	}
	return false
}

// https://www.npmjs.com/package/remix-auth-socials
if (strategies.google) {
	const platformStrategies = strategies.google
	const settings = {
		callbackURL: `${hostname}/auth/${SocialsProvider.GOOGLE}/callback`,
		...(platformStrategies)
	}
	authenticator.use(new GoogleStrategy(
		settings,
		async ({ profile }) => {

			const valid = validateAccount(profile, platformStrategies.allowedAccounts)

			if (!valid) {
				console.log('Invalid user', profile)
				throw new Error('Invalid user')
			}
			console.log('valid user', profile)

			return profile;

		}
	));
}
