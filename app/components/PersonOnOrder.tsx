import { MouseEventHandler } from 'react'
import { Form } from 'remix'
import { Translator } from '~/locale/translation'
import { Person } from '~/root'
import { PersonToOrderType } from './PersonToOrder'

type PersonOnOrderParams = {
	id: number
	translator: Translator
	details: PersonToOrderType
}

export default function PersonOnOrder({ id, translator, details }: PersonOnOrderParams) {
	return (
		<Form method='post' action='/order/newOrder'>
			<input type="hidden" name="id" value={id} />
			<div className="flex rounded-2xl group bg-red text-light w-full h-72 p-2 border border-red mb-6">
				<img src={`/${details.gender}.svg`} alt="gender" className="my-4 mx-2" />
				<div className=" flex flex-col justify-center mx-4">
					<span className="text-2xl font-bold">{details.fullname}</span>

					<span className="py-2">{details.requirements}</span>

					<button
						name="_action"
						value="edit_person"
						className=" w-52 font-bold hover:text-red hover:bg-light mt-4 border-0 py-2 px-5 outline outline-light rounded-full"
					>
						{translator.translate('edit')}
					</button>
				</div>
			</div>
		</Form>
	)
}
