const path = require('path')
const sendHTMLEmail = require('./helpers/sendHTMLEmail').default

function normalize (order) {
	order.persons.map((p) => {
		p.requirements.map((r) => {
			r.description.replace('\n', ', ')
			r.description.replace(/ +/g, ' ')
		})
	})
	order.isDeliveryDelivery = order.delivery_type === 'delivery'
	order.isDeliveryPickup = order.delivery_type === 'pickup'
}

const translations = {
	subject: {
		cs: 'Potvrzení objednavky ze satniku',
		ua: 'Підтвердження замовлення з шафи',
	},
}

const sendOrderConfirm = async function (order) {
	order = JSON.parse(JSON.stringify(order))
	normalize(order)
	const lang = order.lang === 'cs' ? 'cs' : 'ua'

	return sendHTMLEmail(
		order,
		translations.subject[lang],
		lang,
		path.resolve(`./html/order_confirm`),
	)
}

exports.default = {sendOrderConfirm}
