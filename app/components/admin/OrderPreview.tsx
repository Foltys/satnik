import { Order } from '@prisma/client'
import { Form } from 'remix'

export type OrderPreviewProps = {
	order: Order
	modal: boolean
	onClose: () => void
}

export default function OrderPreview({ order, modal = false, onClose }: OrderPreviewProps) {
	const order_created = new Date(order.created_at).toLocaleDateString('cs-CZ', {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	})
	return (
		<div className="p-3 flex flex-col text-black">
			<div className="flex flex-row items-start">
				<div className="flex flex-col flex-1 ">
					<p className="text-2xl font-bold">{order.id}</p>
					<p className="text-sm text-brown-500 py-2">Vytvořeno: {order_created}</p>
				</div>
				<button onClick={onClose} className="border-2 rounded-full text-blue px-6 py-3 border-blue">
					Zavřít
				</button>
			</div>
			<div className="flex flex-col">
				{order.persons.map((person: any) => (
					<div key={person.id}>
						<div className="flex flex-row items-center place-content-between">
							<div className="flex flex-col grow">
								<p className="font-bold text-lg text-blue">{decodeURIComponent(person.fullname)}</p>
								<p>
									{person.sex === 'man' ? 'muž' : 'žena'}, {person.age}
								</p>
							</div>
							<div className="flex justify-center align-center p-4 m-1 rounded-xl bg-light">
								<img src="/cloth.svg" alt="" className="mr-2" />
								<div className="">{person.clothing_size}</div>
							</div>
							<div className="flex justify-center align-center p-4  m-1 rounded-xl bg-light">
								<img src="/shoe.svg" alt="" className="mr-2" />
								<div className=" ">{person.shoe_size}</div>
							</div>
						</div>

						<div className="text-sm">Oblečení</div>
						<div className="text-ellipsis overflow-hidden text-lg font-bold">
							{decodeURIComponent(person.requirements[0].description)}
						</div>
						{order.persons.length > 1 && <hr className="border border-brown-500" />}
					</div>
				))}
				<div className="flex flex-row justify-between mt-6 overflow-hidden">
					<div className="flex gap-y-1 flex-col text-sm text-gray-900 overflow-hidden">
						<span className=" text-brown-500 mb-2">Objednává:</span>
						<span className="overflow-hidden text-ellipsis">{order.fullname}</span>
						<span className="overflow-hidden text-ellipsis">{order.phone}</span>
						<a href={`mailto:${order.email}`} className="overflow-hidden text-ellipsis">
							{order.email}
						</a>
					</div>
					<div className="w-1 border-l border-l-brown-500 h-36 mx-6"></div>
					<div className="flex gap-y-1 flex-col text-sm text-gray-900 overflow-hidden">
						{order.delivery_type === 'delivery' ? (
							<>
								<span className=" text-brown-500 mb-2">Doručovací adresa:</span>
								<span className="overflow-hidden text-ellipsis">{order.delivery_fullname}</span>
								<span className="overflow-hidden text-ellipsis">{order.delivery_city}</span>
								<span className="overflow-hidden text-ellipsis">{order.delivery_street}</span>
								<span>{order.delivery_zip}</span>
								<a href={`tel:${order.delivery_phone}`}>{order.delivery_phone}</a>
								<a href={`mailto:${order.email}`} className="overflow-hidden text-ellipsis">
									{order.email}
								</a>
							</>
						) : (
							<>
								<span className="text-brown-500 mb-2">Místo vyzvednutí:</span>
								<span>Hala 13 v Pražské tržnici</span>
								<span>Bubenské nábřeží 306</span>
								<span>170 00 Praha 7</span>
								<a href={`tel:+420737597070`}>+420 737 59 70 70</a>
								<a href={`mailto:info@satnikpraha.cz`}>info@satnikpraha.cz</a>
							</>
						)}
					</div>
				</div>

				<Form method="post" className="mt-6">
					<>
						{order.state === 'open' ? (
							<button className="text-blue font-bold" name="action" value="process">
								Začít vyřizovat
							</button>
						) : order.state != 'done' ? (
							<button className="text-blue font-bold" name="action" value="finish">
								Označit jako vyřízené
							</button>
						) : (
							<button className="text-blue font-bold" name="action" value="revert">
								Vrátit zpět
							</button>
						)}
					</>
					<input type="hidden" name="updateid" value={order.id} />
				</Form>
			</div>
		</div>
	)
}
