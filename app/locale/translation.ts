import cs from './translations/cs.json'
import ua from './translations/ua.json'
export default function translation(locale: string) {
	const translationToUse = locale == 'ua' ? ua : (cs as { [key: string]: any })
	return function translate(string: string): string {
		return translationToUse[string] || 'missing translation: ' + string
	}
}

export type Translator = {
	translate: (string: string) => string
	language: string
}
