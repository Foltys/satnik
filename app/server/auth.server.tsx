import { Authenticator } from 'remix-auth'
import { OAuth2Profile } from 'remix-auth-oauth2'
import { FormStrategy } from 'remix-auth-form'
import { GoogleStrategy, SocialsProvider, GoogleProfile } from 'remix-auth-socials'
import { AuthStrategies } from '~/root'
import { sessionStorage } from '~/services/session.server'
import config from 'config'
import { getUserByGmailId, getPendingInvites, convertInviteToUser } from '../../prisma/api/Users'
import { User } from '@prisma/client'

export let authenticator = new Authenticator(sessionStorage, { sessionKey: '_session' })

const hostname: string = config.get('hostname')
const strategies: AuthStrategies = config.get('auth.strategies')

async function validateGmail(profile: GoogleProfile): Promise<User | false> {
	const userInDatabase = await getUserByGmailId(profile.id)
	if (userInDatabase) {
		return userInDatabase
	}
	if (!profile.emails) {
		return false
	}
	const invites = await getPendingInvites()
	for (const emailNode of profile.emails) {
		if (invites.includes(emailNode.value)) {
			return await convertInviteToUser(emailNode.value, undefined, profile.id, profile.displayName)
		}
	}
	return false
}

if (strategies.google) {
	const platformStrategies = strategies.google
	const settings = {
		callbackURL: `${hostname}/auth/${SocialsProvider.GOOGLE}/callback`,
		...platformStrategies,
	}
	authenticator.use(
		new GoogleStrategy(settings, async ({ profile }) => {
			const validProfile = await validateGmail(profile)

			if (!validProfile) {
				console.log('Invalid user', profile)
				throw new Error('Invalid user')
			}
			console.log('valid user', profile)

			return validProfile
		}),
	)
}

authenticator.use(
	new FormStrategy(async ({ form }) => {
		const email = form.get('email')
		const password = form.get('password')
	}),
)
