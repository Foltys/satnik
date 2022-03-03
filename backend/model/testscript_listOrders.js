const {listOrders} = require('./Order').default

async function run () {
	const orders = await listOrders({})

	console.log(orders)
}

run()
