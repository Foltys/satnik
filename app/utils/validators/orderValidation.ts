import { OrderInProgress, Person } from '~/root'

export function ContactAndDeliveryHasError(order: OrderInProgress): boolean {
	if (
		order.delivery_type === 'delivery' &&
		order.fullname &&
		order.phone &&
		order.email &&
		order.delivery_fullname &&
		order.delivery_street &&
		order.delivery_city &&
		order.delivery_zip
	) {
		return false
	} else if (order.delivery_type === 'pickup' && order.fullname && order.phone) {
		return false
	}
	return true
}

export function NewPersonHasError(newPersonInfo: Person): boolean {
    if (
        newPersonInfo.sex &&
        newPersonInfo.age &&
        newPersonInfo.clothing_size &&
        newPersonInfo.fullname &&
        newPersonInfo.requirements &&
        newPersonInfo.shoe_size
    ) {
        return false
    }
    return true
}