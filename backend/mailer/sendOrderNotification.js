const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({

	// setting up gmail sender is best against antispam filters
	// tutorial for setting up gmail account allowance:
	// https://www.geeksforgeeks.org/how-to-send-email-using-node-js/

	service: 'gmail',
	auth: {
		user: 'prahasatnik',
		pass: 'KwAEer8triU4qgU',
	}
})

function getMailOptions (order) {
	return {
		from: 'prahasatnik@gmail.com',
		to: order.email,
		subject: 'Nova objednavka ze satniku',
	}
}

function formatRequirements (requirements) {
	const prefix = '      '
	const reqs = requirements.map(function (r) {
		return [
			`${prefix}- ${r.description}`,
		].join(`\n${prefix}`)
	})
	return [
		`${prefix}NEZBYTNOSTI PRO TUTO OSOBU:`,
		`${reqs.join(`\n${prefix}`)}`,
	].join(`\n${prefix}`)
}

function formatPersons (persons) {
	const prefix = '   '
	const pers = persons.map(function (p) {
		return [
			`${p.sex === 'man' ? 'muz' : 'zena'} - ${p.fullname}`,
			`${p.adult ? 'dospely' : 'dite'} - ${p.age} let`,
			`velikost obleceni: ${p.clothing_size}`,
			`velikost bot: ${p.shoe_size}`,
			`${formatRequirements(p.requirements)}`,
		].join(`\n${prefix}`)
	})
	return [
		`${prefix}OSOBY:`,
		`${pers.join(`\n\n${prefix}`)}`,
	].join(`\n\n${prefix}`)
}

function formatOrder (order) {
	const prefix = ''
	const lines = [
		`VYTVORENO: ${order.created_at.toISOString()}`,
		``,
		`NA CLOVEKA:`,
		` - jmeno: ${order.fullname}`,
		` - telefon: ${order.phone}`,
		` - email: ${order.email}`,
		``,
		`INFORMACE O DORUCENI:`,
		` - ${order.delivery_type === 'delivery' ? 'doruceni na adresu' : 'osobni vyzvednuti'}`,
		` - na jmeno: ${order.delivery_fullname}`,
	]
	if (order.delivery_street) {
		lines.push(` - ulice: ${order.delivery_street}`)
	}
	if (order.delivery_city) {
		lines.push(` - mesto: ${order.delivery_city}`)
	}
	if (order.delivery_zip) {
		lines.push(` - PSC: ${order.delivery_zip}`)
	}
	if (order.delivery_phone) {
		lines.push(` - telefon: ${order.delivery_phone}`)
	}
	if (order.delivery_time) {
		lines.push(` - cas doruceni: ${order.delivery_time.toISOString()}`)
	}
	lines.push(``)
	lines.push(`${formatPersons(order.persons)}`)
	return lines.join(`\n${prefix}`)
}

const sendOrderNotification = async function (order) {
	const mailOptions = getMailOptions(order)
	mailOptions.text = formatOrder(order)
	const info = await transporter.sendMail(mailOptions)
	return info
}

exports.default = {sendOrderNotification}
