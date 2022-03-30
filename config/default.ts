import dotenv from 'dotenv'
dotenv.config()

export default {
	'hostname': 'http://localhost:3000',
	'session': {
		'secrets': (process.env.SESSION_SECRETS as string).split(',').map(s => s.trim()),
	},
	'email': {
		'companyAddress': 'prahasatnik@gmail.com',
		'provider': {
			'service': 'gmail',
			'auth': {
				'user': 'prahasatnik',
				'pass': process.env.EMAIL_PROVIDER_AUTH_PASSWORD as string,
			},
		},
	},
	'auth': {
		'enabled': true,
		'strategies': {
			'google': {
				'clientID': process.env.AUTH_GOOGLE_CLIENTID as string,
				'clientSecret': process.env.AUTH_GOOGLE_CLIENTSECRET as string,
				'allowedAccounts': [
					'prahasatnik@gmail.com',
					'michal.palma@gmail.com',
					'adam.sobotka@emplifi.io',
					'folejtar.jakub@gmail.com',
				],
			},
		},
	},
}
