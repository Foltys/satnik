import hbs, { NodemailerExpressHandlebarsOptions } from 'nodemailer-express-handlebars'
import fsna from 'fs'
import nodemailer from 'nodemailer'
const fs = fsna.promises

async function getImagesAttachments(path: string) {
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


export default async function (data:any, to:string, subject:string, lang:string, templatePath:string, attachmentsPath:string) {
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
	const handlebarOptions: NodemailerExpressHandlebarsOptions = {
		viewEngine: {
			partialsDir: [templatePath, lang].join('/'),
			defaultLayout: false,
			helpers: {
				inc: function (value:any, options:any) {
					return parseInt(value) + 1
				},
			},
		},
		viewPath: [templatePath, lang].join('/'),
	}
	console.log(handlebarOptions)

	transporter.use('compile', hbs(handlebarOptions))
	const mailOptions = {
		from: 'prahasatnik@gmail.com',
		to,
		subject: subject,
		template: 'index',
		attachments: await getImagesAttachments(attachmentsPath),
		context: { order: data },
	}

	const info = await transporter.sendMail(mailOptions)
	return info
}
