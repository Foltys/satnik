const {saveNewOrder} = require('./Order').default

const order = {
	fullname: 'Olena Shevchenko',
	phone: '777777777',
	email: 'name@email.com',
	delivery_type: 'pickup',
	delivery_fullname: 'Petr Pavel',
	delivery_street: 'Jecna 22',
	delivery_city: 'Praha',
	delivery_zip: '12000',
	delivery_phone: '777111111',
	delivery_time: new Date('2022-03-01'),
	persons: [
		{
			type: 'woman',
			fullname: 'Anna Koroljenko',
			age: 30,
			clothing_size: 'm',
			shoe_size: '41',
			requirements: [
				{
					type: 'jacket',
					description: 'libovolny popisek',
				},
				{
					type: 'pants',
					description: 'libovolny popisek',
				}
			],
		},
		{
			type: 'child',
			fullname: 'Pavel Koroljenko',
			age: 10,
			clothing_size: 's',
			shoe_size: '30',
			requirements: [
				{
					type: 'shoes',
					description: 'libovolny popisek',
				}
			],
		},
	],
	state: 'open',
	created_at: new Date(),
	updated_at: new Date(),
}

async function run () {
	await saveNewOrder(order)
}

run()
