import express from 'express'
import compression from 'compression'
import morgan from 'morgan'
import { createRequestHandler } from '@remix-run/express'
import dotenv from 'dotenv'

import * as serverBuild from '@remix-run/dev/server-build'
dotenv.config()

// normalization of config dir
process.env['NODE_CONFIG_DIR'] = __dirname + '/config'

const app = express()

app.use(compression())

// http://expressjs.com/en/advanced/best-practice-security.html#at-a-minimum-disable-x-powered-by-header
app.disable('x-powered-by')

// Remix fingerprints its assets so we can cache forever.
app.use('/build', express.static('public/build', { immutable: true, maxAge: '1y' }))

// Everything else (like favicon.ico) is cached for an hour. You may want to be
// more aggressive with this caching.
app.use(express.static('public/build', { maxAge: '1h' }))
app.use(express.static('public'))

app.use(morgan('tiny'))

app.all(
	'*',
	createRequestHandler({
		build: serverBuild,
		mode: process.env.NODE_ENV,
		getLoadContext: (context) => context.env,
	}),
)

const port = process.env.PORT || 3000
const host = process.env.HOST || '0.0.0.0'

app.listen(port, host, () => {
	console.log(`Express server listening on port ${port}`)
})
