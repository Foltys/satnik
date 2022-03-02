import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({

	// setting up gmail sender is best against antispam filters
	// tutorial for setting up gmail account allowance:
	// https://www.geeksforgeeks.org/how-to-send-email-using-node-js/

	service: 'gmail',
	auth: {
		user: 'order@uasatnik.cz',
		pass: 'yourpassword'
	}
})

const mailOptions = {
	from: 'order@uasatnik.cz',
	to: 'admin@uasatnik.cz',
	subject: 'Nova objednavka ze satniku',
};

function format(order) {
	return `Nova objednavka ze systemu uasatnik.cz:
	==============================================
	${JSON.stringify(order)}
	`
}

export default async function sendOrderNotification(order) {
	mailOptions.text= format(order)
	const info = await transporter.sendMail(mailOptions)
	return info
}
