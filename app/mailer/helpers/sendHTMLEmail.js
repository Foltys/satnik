const hbs = require('nodemailer-express-handlebars')
const fsna = require('fs')
const nodemailer = require('nodemailer')
const fs = fsna.promises

async function getImagesAttachments(path) {
	const files = await fs.readdir(path)
	return files
		.filter((f) => !['.', '..'].includes(f))
		.map((f) => {
			return {
				filename: f,
				cid: f,
				path: [path, f].join('/'),
			}
		})
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

exports.default = async function (data, subject, lang, templatePath, attachmentsPath) {
	const handlebarOptions = {
		viewEngine: {
			partialsDir: [templatePath, lang].join('/'),
			defaultLayout: false,
			helpers: {
				inc: function (value, options) {
					return parseInt(value) + 1
				},
			},
		},
		viewPath: [templatePath, lang].join('/'),
	}

	transporter.use('compile', hbs(handlebarOptions))
	const mailOptions = {
		from: 'prahasatnik@gmail.com',
		to: data.email,
		subject: subject,
		template: 'index',
		attachments: await getImagesAttachments(attachmentsPath),
		context: { order: data },
	}

	const info = await transporter.sendMail(mailOptions)
	return info
}
