const {findOrder, updateOrder} = require('./Order').default

async function run () {
	const order = await findOrder({fullname: 'Olena Shevchenko'})

	order.phone = '766111222'

	await updateOrder(order._id, order)
}

run()
