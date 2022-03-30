export function translateDeliveryType(type: string): string {
	switch (type) {
		case 'pickup':
			return 'Osobní odběr';
		case 'delivery':
			return 'Dovoz od Šatníku';
		default:
			return 'WTF';
	}
}
