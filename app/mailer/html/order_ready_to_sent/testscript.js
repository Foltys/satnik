const {findFirst} = require('../../../../prisma/api/Order')
const {send} = require('./send.js').default

async function run () {
	const order = await findFirst({fullname: 'Olena Shevchenko'})
	const info = await send(order)
	console.log(info)
}

run()
