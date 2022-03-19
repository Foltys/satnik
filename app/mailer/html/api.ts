import path from 'path'
import { Order } from '~/root'
import sendHTMLEmail from '../helpers/sendHTMLEmail'
import normalizeOrder from '../helpers/normalizeOrder'

function normalizePath (dirName: string): string {
	return path.join(`./app/mailer/html/${dirName}`)
}

const sendOrderConfirm = async function (order: Order) {
	const translations = {
		subject: {
			cs: 'Potvrzení objednavky ze satniku',
			ua: 'Підтвердження замовлення з шафи',
		},
	}
	order = JSON.parse(JSON.stringify(order))
	normalizeOrder(order)
	const lang = order.lang === 'cs' ? 'cs' : 'ua'

	return sendHTMLEmail(
		order,
		translations.subject[lang],
		lang,
		normalizePath('order_confirm'),
		normalizePath('images'),
	)
}

const sendOrderConfirmCompany = async function (order: Order) {
	order = JSON.parse(JSON.stringify(order))
	normalizeOrder(order)

	return sendHTMLEmail(
		order,
		'Nova objednavka v satniku',
		'cs',
		normalizePath('order_confirm_company'),
		normalizePath('images'),
	)
}

const sendOrderReadyForPickup = async function (order: Order) {
	const translations = {
		subject: {
			cs: 'Objednávka přípravená k osobnímu převzetí',
			ua: 'Замовлення готове до особистого забору',
		},
	}
	order = JSON.parse(JSON.stringify(order))
	normalizeOrder(order)
	const lang = order.lang === 'cs' ? 'cs' : 'ua'

	return sendHTMLEmail(
		order,
		translations.subject[lang],
		lang,
		normalizePath('order_ready_for_pickup'),
		normalizePath('images'),
	)
}

const sendOrderReadyToSend = async function (order: Order) {
	const translations = {
		subject: {
			cs: 'Objednávka přípravená k odeslání',
			ua: 'Замовлення готове до відправлення',
		},
	}
	order = JSON.parse(JSON.stringify(order))
	normalizeOrder(order)
	const lang = order.lang === 'cs' ? 'cs' : 'ua'

	return sendHTMLEmail(
		order,
		translations.subject[lang],
		lang,
		normalizePath('order_ready_to_send'),
		normalizePath('images'),
	)
}

export {sendOrderConfirm, sendOrderConfirmCompany, sendOrderReadyForPickup, sendOrderReadyToSend}
