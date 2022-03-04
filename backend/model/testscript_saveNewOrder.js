const {saveNewOrder} = require('./Order').default

const order = {
	fullname: 'Olena Shevchenko',
	phone: '777777777',
	email: 'michal.palma@gmail.com',
	delivery_type: 'pickup',
	delivery_fullname: 'Petr Pavel',
	delivery_street: 'Jecna 22',
	delivery_city: 'Praha',
	delivery_zip: '12000',
	delivery_phone: '777111111',
	delivery_time: new Date('2022-03-01'),
	persons: [
		{
			sex: "woman",
			adult: true,
			fullname: 'Anna Koroljenko',
			age: 30,
			clothing_size: 'm',
			shoe_size: '41',
			requirements: [
				{
					description: 'cerna bunda',
				},
				{
					description: 'modre boty',
				}
			],
		},
		{
			sex: "man",
			adult: false,
			fullname: 'Pavel Koroljenko',
			age: 10,
			clothing_size: 's',
			shoe_size: '30',
			requirements: [
				{
					description: 'nejake kalhoty',
				}
			],
		},
	],
	state: 'open',
	lang: 'cs',
	created_at: new Date(),
	updated_at: new Date(),
}

async function run () {
	await saveNewOrder(order)
}

run()
