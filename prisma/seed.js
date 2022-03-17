const { saveNewOrder } = require('./api/Order')

async function seed() {
	await Promise.all(getOrders().map((order) => saveNewOrder(order)))
}

seed()

function getOrders() {
	return [
		{
			fullname: 'Olena Shevchenko',
			phone: '777777777',
			email: 'michal.palma@gmail.com',
			delivery_type: 'pickup',
			delivery_fullname: 'This is just TESTING Order / Toto je pouze TESTOVACI objednavka',
			delivery_street: 'Jecna 22',
			delivery_city: 'Praha',
			delivery_zip: '12000',
			delivery_phone: '777111111',
			persons: [
				{
					sex: 'woman',
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
						},
					],
				},
				{
					sex: 'man',
					adult: false,
					fullname: 'Pavel Koroljenko',
					age: 10,
					clothing_size: 's',
					shoe_size: '30',
					requirements: [
						{
							description: 'nejake kalhoty',
						},
					],
				},
			],
			state: 'open',
			lang: 'cs',
			created_at: new Date(),
			updated_at: new Date(),
		},
	]
}
