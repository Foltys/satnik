const {getOrderModel} = require('../../../../prisma/api/Order')
const {send} = require('./send.js').default

async function run () {
	const order = await getOrderModel().findFirst({
		where: {fullname: 'Olena Shevchenko'},
		include: {
			persons: {
				include: {
					requirements: true,
				},
			},
		}
	})
	const info = await send(order)
	console.log(info)
}

run()
