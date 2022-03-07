const {send} = require('./send.js').default
const {findOrder} = require('../../../model/Order').default

async function run () {
	const order = await findOrder({fullname: 'Olena Shevchenko'})
	const info = await send(order)
	console.log(info)
}

run()
