const nodemailer = require('nodemailer')
const hbs = require('nodemailer-express-handlebars')
const path = require('path')

function normalize (order) {
	order.persons.map((p) => {
		p.requirements.map((r) => {
			r.description.replace("\n", ', ')
			r.description.replace(/ +/g, ' ')
		})
	})
	order.isDeliveryDelivery = order.delivery_type === 'delivery'
	order.isDeliveryPickup = order.delivery_type === 'pickup'
}

const transporter = nodemailer.createTransport({

	// setting up gmail sender is best against antispam filters
	// tutorial for setting up gmail account allowance:
	// for better security with OAuth2 we need redirect page at our app
	// https://www.geeksforgeeks.org/how-to-send-email-using-node-js/

	service: 'gmail',
	auth: {
		user: 'prahasatnik',
		pass: 'KwAEer8triU4qgU',
	},
})

const sendOrderConfirm = async function (order) {
	order = JSON.parse(JSON.stringify(order))
	normalize(order)
	const lang = order.lang === 'cs' ? 'cs' : 'ua'

	const handlebarOptions = {
		viewEngine: {
			partialsDir: path.resolve(`./html/order_confirm/${lang}/`),
			defaultLayout: false,
		},
		viewPath: path.resolve(`./html/order_confirm/${lang}/`),
	}

	transporter.use('compile', hbs(handlebarOptions))
	const mailOptions = {
		from: 'prahasatnik@gmail.com',
		to: order.email,
		subject: 'Nova objednavka ze satniku',
		template: 'index',
		attachments: [
			{filename: 'image-1.png', cid: 'image-1.png', path: './html/order_confirm/images/image-1.png'},
			{filename: 'image-2.png', cid: 'image-2.png', path: './html/order_confirm/images/image-2.png'},
			{filename: 'image-3.png', cid: 'image-3.png', path: './html/order_confirm/images/image-3.png'},
		],
		context: {order},
	}

	const info = await transporter.sendMail(mailOptions)
	return info
}

exports.default = {sendOrderConfirm}
