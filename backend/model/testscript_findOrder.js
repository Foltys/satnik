const {findOrder} = require('./Order').default

async function run () {
	const order = await findOrder({fullname: 'Olena Shevchenko'})
	console.log(JSON.stringify(order))
}

run()
