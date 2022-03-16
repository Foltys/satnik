import { MouseEventHandler } from 'react'
import { Translator } from '~/locale/translation'
import { Person } from '~/root'

type PersonOnOrderParams = {
	translator: Translator
	details: Person
	editItem: MouseEventHandler
}

export default function PersonOnOrder({ translator, details, editItem }: PersonOnOrderParams) {
	return (
		<div className="flex rounded-2xl group bg-[#eb2f06] text-[#F8EBDB] w-full h-72 p-2 border border-[#eb2f06] mb-6">
			<img src={!details.adult ? 'kid.svg' : `${details.sex}.svg`} alt="" className="my-4 mx-2" />
			<div className=" flex flex-col justify-center mx-4">
				<span className="text-2xl font-bold">{details.fullname}</span>
				{details.requirements && details.requirements.length > 0 ? details.requirements.map((requirement, index) => {
					return (
						<span key={index} className="py-2">
							{requirement.description}
						</span>
					)
				}) : null}

				<button
					onClick={editItem}
					className="font-semibold hover:text-[#eb2f06] hover:bg-[#F8EBDB] mt-4 border-0 py-2 px-5 outline outline-[#F8EBDB] rounded-full"
				>
					{translator.translate('edit')}
				</button>
			</div>
		</div>
	)
}
