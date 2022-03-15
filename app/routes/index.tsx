import { useState, useEffect, MouseEventHandler, ChangeEventHandler } from 'react'
import { useOutletContext, useNavigate, useSubmit, Link } from 'remix'
import ContactInfo from '~/components/ContactInfo'
import DeliveryInfo from '~/components/DeliveryInfo'
import { OutletContext } from '~/root'

export default function Index() {
	const { translator, setOrderItem, order } = useOutletContext<OutletContext>()
	const navigate = useNavigate()
	const [delivery, setDelivery] = useState(order.delivery_type == 'delivery')

	const handleDelivery: ChangeEventHandler = (e) => {
		setDelivery(!delivery)
	}

	const handleChange = (identificator: string): ChangeEventHandler<HTMLInputElement> => {
		return (event) => {
			setOrderItem([identificator], event.target.value)
		}
	}

	const nextForm: MouseEventHandler = (e) => {
		e.preventDefault()
		navigate('/newOrder', { replace: false })
	}

	useEffect(() => {
		setOrderItem('delivery_type', delivery ? 'delivery' : 'pickup')
	}, [delivery, setOrderItem])

	return (
		<div className="flex flex-col">
			<ContactInfo translator={translator} order={order} handleChange={handleChange} />
			<DeliveryInfo
				translator={translator}
				handleDelivery={handleDelivery}
				handleChange={handleChange}
				order={order}
				delivery={delivery}
				nextForm={nextForm}
			/>
		</div>
	)
}
