const path = require('path')
const sendHTMLEmail = require('../../helpers/sendHTMLEmail').default
const normalizeOrder = require('../../helpers/normalizeOrder').default

const send = async function (order) {
	order = JSON.parse(JSON.stringify(order))
	normalizeOrder(order)

	return sendHTMLEmail(order, 'Nova objednavka v satniku', 'cs', path.resolve('./'), path.resolve('../images'))
}

exports.default = { send }
