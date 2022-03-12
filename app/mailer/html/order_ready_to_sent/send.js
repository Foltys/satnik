const path = require('path')
const sendHTMLEmail = require('../../helpers/sendHTMLEmail').default
const normalizeOrder = require('../../helpers/normalizeOrder').default

const translations = {
	subject: {
		cs: 'Objednávka přípravená k odeslání',
		ua: 'Замовлення готове до відправлення',
	},
}

const send = async function (order) {
	order = JSON.parse(JSON.stringify(order))
	normalizeOrder(order)
	const lang = order.lang === 'cs' ? 'cs' : 'ua'

	return sendHTMLEmail(
		order,
		translations.subject[lang],
		lang,
		path.resolve('./'),
		path.resolve('../images'),
	)
}

exports.default = {send}
