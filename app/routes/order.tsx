import { Outlet, useOutletContext } from 'remix'

export default function OrderPage() {
	const rootcontext = useOutletContext<typeof Outlet>()
	return (
		<div className="container px-5 py-14 md:py-24 mx-auto flex flex-row sm:flex-nowrap flex-wrap gap-12 justify-center">
			<div className="basis-full md:basis-1/2">
				<Outlet context={rootcontext} />
			</div>

			<div className="hidden md:flex basis-1/4 ">
				<img
					src="https://images.unsplash.com/photo-1582719188393-bb71ca45dbb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80"
					className=" rounded-3xl w-[336px] object-cover object-center h-[597px]"
					alt="illustration"
				/>
			</div>
		</div>
	)
}
