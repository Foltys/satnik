import { User } from '@prisma/client'
import { Link } from 'remix'

export type HeaderProps = {
	user: User
}

export default function Header({ user }: HeaderProps) {
	return (
		<header className="pl-5 pr-3 mb-9 flex justify-between items-end text-gray-600 body-font">
			<Link to="/">
				<img src="/red.svg" className="w-16 h-16 md:w-32 md:h-32" alt="Šatník Praha" />
			</Link>
			<Link className="text-blue text-base rounded-3xl border-2 px-6 py-3 border-blue" to="user">
				{/* <div className="rounded-3xl border-2 border-blue align-middle text-center"> */}
				{user.name}
				{/* </div> */}
			</Link>
			{/* <div className="container mx-auto flex flex-wrap py-5 flex-col md:flex-row items-center">
				<div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
					{data.user.photos &&
						data.user.photos.map((photo: any) => (
							<img
								key={data.user?.id}
								src={photo.value}
								alt={'profile'}
								className="w-10 h-10 text-white border-blue rounded-full"
							/>
						))}
					<span className="ml-3 text-xl">{data.user.displayName}</span>
				</div>
				<nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 flex flex-wrap items-center text-base justify-center">
					<a className="mr-5 hover:text-gray-900 hidden" href="/">
						maybe some links
					</a>
		    		</nav>
				<Form action="/logout" method="post">
					<button className="inline-flex items-center  font-medium border-0 py-1 px-3 focus:outline-none hover:text-gray-900 rounded text-base mt-4 md:mt-0 transition-colors duration-200 ease-in-out">
						Odhlásit
						<svg
							fill="none"
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							className="w-4 h-4 ml-1"
							viewBox="0 0 24 24"
						>
							<path d="M5 12h14M12 5l7 7-7 7"></path>
						</svg>
					</button>
				</Form>
			</div> */}
		</header>
	)
}
