import { Person } from "~/root"

export default function (order: any) {
	order.persons.map((p: Person) => {
		p.isMan = p.sex === 'man'
		p.isWoman = p.sex === 'woman'
		p.requirements.map((r) => {
			r.description.replace('\n', ', ')
			r.description.replace(/ +/g, ' ')
		})
	})
	order.isDeliveryDelivery = order.delivery_type === 'delivery'
	order.isDeliveryPickup = order.delivery_type === 'pickup'
}