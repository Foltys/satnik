import path from 'path'
import { Order } from '~/root'
import sendHTMLEmail from '../../helpers/sendHTMLEmail'
import normalizeOrder from '../../helpers/normalizeOrder'

export const send = async function (order: Order) {
	order = JSON.parse(JSON.stringify(order))
	normalizeOrder(order)

	return sendHTMLEmail(
		order,
		'Nova objednavka v satniku',
		'cs',
		path.join('./app/mailer/html/order_confirm_company'),
		path.join('./app/mailer/html/images'),
	)
}
