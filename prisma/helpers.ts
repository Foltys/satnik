import { Order } from "~/root"

export const prepareOrderForPrismaInsert = function (order: Order) {
	order.persons.forEach((person) => {
		person.requirements = { create: person.requirements } as any
	})
	order.persons = { create: order.persons } as any
	return order
}


