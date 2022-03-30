export function getStateColor(state: string): string {
	switch (state) {
		case 'open':
			return 'red';
		case 'process':
			return 'blue';
		case 'done':
			return 'brown-600';
		default:
			return '';
	}
}
