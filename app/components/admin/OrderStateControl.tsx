import { Order } from '~/root'
import { getStateColor } from '~/utils/getStateColor'
import { translateState } from '~/utils/translateState'

type OrderStareControlProps = {
	order: Order
}

export default function OrderStateControl({ order }: OrderStareControlProps) {
	const stateColor = getStateColor(order.state)
	return (
		<div className={`rounded-full text-tiny px-3 py-1 border border-slate-300 md:hover:border-blue`}>
			{translateState(order.state)}
		</div>
	)
}
