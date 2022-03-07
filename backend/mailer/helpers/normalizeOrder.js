
exports.default = function (order) {
	order.persons.map((p) => {
		p.requirements.map((r) => {
			r.description.replace('\n', ', ')
			r.description.replace(/ +/g, ' ')
		})
	})
	order.isDeliveryDelivery = order.delivery_type === 'delivery'
	order.isDeliveryPickup = order.delivery_type === 'pickup'
}
