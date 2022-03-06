const {sendOrderConfirm} = require('./sendOrderConfirmation.js').default
const {findOrder} = require('../model/Order').default

async function run () {
	const order = await findOrder({fullname: 'Olena Shevchenko'})
	const info = await sendOrderConfirm(order)
	console.log(info)
}

run()
