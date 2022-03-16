import { MouseEventHandler, ChangeEventHandler } from 'react'
import { useOutletContext, useNavigate } from 'remix'
import ContactInfo from '~/components/ContactInfo'
import DeliveryInfo from '~/components/DeliveryInfo'
import { OutletContext } from '~/root'

export function action ({request}: {request: Request}) {
}

export default function Index() {
	const { translator, setOrderItem, order } = useOutletContext<OutletContext>()
	const navigate = useNavigate()

	const handleFormInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
		console.log(event.target.name, event.target.value)
		setOrderItem(event.target.name, event.target.value)
	}

	const nextForm: MouseEventHandler = (e) => {
		e.preventDefault()
		navigate('/newOrder', { replace: false })
	}

	return (
		<div className="flex flex-col">
			<ContactInfo translator={translator} order={order} handleChange={handleFormInputChange} />
			<DeliveryInfo
				translator={translator}
				handleChange={handleFormInputChange}
				order={order}
				nextForm={nextForm}
			/>
		</div>
	)
}
