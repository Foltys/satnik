import path from 'path'
import { Order } from '~/root'
import sendHTMLEmail from '../../helpers/sendHTMLEmail'
import normalizeOrder from '../../helpers/normalizeOrder'

const translations = {
	subject: {
		cs: 'Potvrzení objednavky ze satniku',
		ua: 'Підтвердження замовлення з шафи',
	},
}

export const send = async function (order: Order) {
	order = JSON.parse(JSON.stringify(order))
	normalizeOrder(order)
	const lang = order.lang === 'cs' ? 'cs' : 'ua'

	return sendHTMLEmail(
		order,
		translations.subject[lang],
		lang,
		path.join('./app/mailer/html/order_confirm'),
		path.join('./app/mailer/html/images'),
	)
}

