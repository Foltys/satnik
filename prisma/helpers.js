const prepareOrderForPrismaInsert = function (order) {
	order.persons.map((person) => {
		person.requirements = { create: person.requirements }
	})
	order.persons = { create: order.persons }
	return order
}

module.exports = { prepareOrderForPrismaInsert }
