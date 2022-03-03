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

function format (order) {
	return `Nova objednavka ze systemu uasatnik.cz:
	==============================================
	${JSON.stringify(order)}
	`
}

const sendOrderNotification = async function (order) {
	const mailOptions = getMailOptions(order)
	mailOptions.text = format(order)
	const info = await transporter.sendMail(mailOptions)
	return info
}

exports.default = {sendOrderNotification}
