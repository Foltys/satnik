import { MouseEventHandler } from 'react'
import { Translator } from '~/locale/translation'

export type GenderSelectorParams = {
	translator: Translator
	selectGender: (gender: Gender) => MouseEventHandler
}

export type Gender = 'man' | 'woman' | 'kid'

export default function GenderSelector({ translator, selectGender }: GenderSelectorParams) {
	return (
		<div className="flex space-x-2 mb-16 md:mb-12 text-gray-800">
			<button
				onClick={selectGender('woman')}
				className="rounded-2xl group bg-white w-1/3 lg:w-1/4 h-80 p-2 border border-[#957D5E] flex flex-col hover:border-[#0A9DBF] hover:bg-[#F8EBDB] items-center"
			>
				<img src="woman.svg" alt="man" className="my-4 " />
				<span className="text-2xl font-bold">{translator.translate('woman')}</span>
				<span className="text-[#0A9DBF] font-semibold mt-4">{translator.translate('pick')}</span>
			</button>
			<button
				onClick={selectGender('man')}
				className="rounded-2xl group bg-white w-1/3 lg:w-1/4 h-80 p-2 border border-[#957D5E] flex flex-col hover:border-[#0A9DBF] hover:bg-[#F8EBDB] items-center"
			>
				<img src="man.svg" alt="man" className="my-4 " />
				<span className="text-2xl font-bold">{translator.translate('man')}</span>
				<span className="text-[#0A9DBF] font-semibold mt-4">{translator.translate('pick')}</span>
			</button>
			<button
				onClick={selectGender('kid')}
				className="rounded-2xl group bg-white w-1/3 lg:w-1/4 h-80 p-2 border border-[#957D5E] flex flex-col hover:border-[#0A9DBF] hover:bg-[#F8EBDB] items-center"
			>
				<img src="kid.svg" alt="man" className="my-4 " />
				<span className="text-2xl font-bold">{translator.translate('kid')}</span>
				<span className="text-[#0A9DBF] font-semibold mt-4">{translator.translate('pick')}</span>
			</button>
		</div>
	)
}
