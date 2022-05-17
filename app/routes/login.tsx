import { User } from '@prisma/client'
import { ActionFunction, Form, json, redirect, useActionData } from 'remix'
import { SocialsProvider } from 'remix-auth-socials'
import { authenticator } from '~/server/auth.server'

interface SocialButtonProps {
	provider: SocialsProvider
	label: string
}

const SocialButton: React.FC<SocialButtonProps> = ({ provider, label }) => (
	<Form action={`/auth/${provider}`} method="post">
		<button className=" font-bold text-lg text-blue">{label}</button>
	</Form>
)

export const action: ActionFunction = async ({ request }) => {
	const user = (await authenticator.authenticate('form', request, { failureRedirect: '/login?failed=true' })) as User
	if (user.admin) {
		redirect('/admin/table')
	} else {
		redirect('/admin/list')
	}
}

// export const action: ActionFunction = async ({ request }) => {
// 	const data = Object.fromEntries(await request.formData())

// 	return json(data)
// }

export default function Login() {
	console.log(useActionData())
	return (
		<div className=" bg-blue w-full h-screen flex flex-col justify-center items-center">
			<div className="w-full flex justify-center">
				<img src="/satnik-beige.svg" alt="satnik logo" className="h-48 w-48" />
			</div>
			<div className="w-full h-screen flex justify-center items-center">
				<div className="flex flex-col justify-center items-center">
					<div className="w-full  text-5xl font-bold text-light flex justify-center pb-12">Přihlásit se do Šatníku</div>
					<div className="bg-white w-80 h-16 rounded-3xl flex flex-row items-center ">
						<img src="/googlelogo.svg" alt="google login logo" className=" w-8 h-8 my-2 mx-8 font-bold" />
						<SocialButton provider={SocialsProvider.GOOGLE} label="Login with Google" />
					</div>
					<Form method="post" className="mt-5 flex-col w-80 min-w-max justify-around">
						<label htmlFor="username" className="text-black">
							Username
						</label>
						<input
							id="username"
							name="username"
							className="focus:outline-blue p-3 min-w-full h-8 flex rounded-md"
							type="text"
						></input>
						<label htmlFor="pass" className="text-black">
							Password
						</label>
						<input
							id="password"
							name="password"
							className="focus:outline-blue p-3 min-w-full h-8 flex rounded-md"
							type="password"
						></input>
						<button>Login</button>
					</Form>
				</div>
			</div>
		</div>
	)
}
