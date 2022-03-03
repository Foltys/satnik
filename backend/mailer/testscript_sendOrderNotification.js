const {sendOrderNotification} = require('./sendOrderNotification.js').default
const {findOrder} = require('../model/Order').default

async function run () {
	const order = await findOrder({fullname: 'Olena Shevchenko'})
	const info = await sendOrderNotification(order)
	console.log(info)
}

run()
