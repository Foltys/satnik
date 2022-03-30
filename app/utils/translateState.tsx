export function translateState(state: string): string {
	switch (state) {
		case 'open':
			return 'Čeká na zpracování';
		case 'process':
			return 'Zpracovává se';
		case 'done':
			return 'Vyřízeno';
		default:
			return 'WTF';
	}
}
