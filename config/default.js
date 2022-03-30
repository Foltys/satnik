const dotenv = require('dotenv')
dotenv.config()

module.exports = {
	'hostname': 'http://localhost:3000',
	'session': {
		'secrets': process.env.SESSION_SECRETS.split(',').map(s => s.trim()),
	},
	'email': {
		'companyAddress': 'prahasatnik@gmail.com',
		'provider': {
			'service': 'gmail',
			'auth': {
				'user': 'prahasatnik',
				'pass': process.env.EMAIL_PROVIDER_AUTH_PASSWORD,
			},
		},
	},
	'auth': {
		'enabled': true,
		'strategies': {
			'google': {
				'clientID': process.env.AUTH_GOOGLE_CLIENTID,
				'clientSecret': process.env.AUTH_GOOGLE_CLIENTSECRET,
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
