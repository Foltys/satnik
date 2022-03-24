import { Form } from 'remix'
import { SocialsProvider } from 'remix-auth-socials'

interface SocialButtonProps {
	provider: SocialsProvider
	label: string
}

const SocialButton: React.FC<SocialButtonProps> = ({ provider, label }) => (
	<Form action={`/auth/${provider}`} method="post">
		<button className=" font-bold text-lg text-blue">{label}</button>
	</Form>
)

export default function Login() {
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
				</div>
			</div>
		</div>
	)
}
