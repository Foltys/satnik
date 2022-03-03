const {findOrder, updateOrder} = require('./Order').default

async function run () {
	const order = await findOrder({fullname: 'Olena Shevchenko'})

	order.phone = '766111222'

	try {
		await updateOrder(order._id, order)
	} catch (e) {
		console.error(e)
	}
}

run()
