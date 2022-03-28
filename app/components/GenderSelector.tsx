import { Form } from 'remix'
import { Translator } from '~/locale/translation'

export type GenderSelectorParams = {
	translator: Translator
}

export type Gender = 'man' | 'woman' | 'kid'

export default function GenderSelector({ translator }: GenderSelectorParams) {
	return (
		<Form method='get'>
			<div className="flex space-x-2 mb-16 md:mb-12 text-gray-900">
				<button
					name='gender'
					value='woman'
					className="rounded-2xl group bg-white w-1/3 h-80 p-2 border border-brown-600 flex flex-col md:hover:border-blue md:hover:bg-light items-center transition-colors duration-200 ease-in-out"
				>
					<img src="/woman.svg" alt="woman" className="my-4 " />
					<span className="text-2xl font-bold">{translator.translate('woman')}</span>
					<span className="text-blue font-bold mt-4">{translator.translate('pick')}</span>
				</button>
				<button
					name='gender'
					value='man'
					className="rounded-2xl group bg-white w-1/3  h-80 p-2 border border-brown-600 flex flex-col md:hover:border-blue md:hover:bg-light items-center transition-colors duration-200 ease-in-out"
				>
					<img src="/man.svg" alt="man" className="my-4 " />
					<span className="text-2xl font-bold">{translator.translate('man')}</span>
					<span className="text-blue font-bold mt-4">{translator.translate('pick')}</span>
				</button>
				<button
					name='gender'
					value='kid'
					className="rounded-2xl group bg-white w-1/3 h-80 p-2 border border-brown-600 flex flex-col md:hover:border-blue md:hover:bg-light items-center transition-colors duration-200 ease-in-out"
				>
					<img src="/kid.svg" alt="kid" className="my-4 " />
					<span className="text-2xl font-bold">{translator.translate('kid')}</span>
					<span className="text-blue font-bold mt-4">{translator.translate('pick')}</span>
				</button>
			</div>
		</Form>
	)
}
