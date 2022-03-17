import { ChangeEventHandler, MouseEventHandler, useEffect, useState } from 'react'
import { useOutletContext, useNavigate } from 'remix'
import PersonOnOrder from '~/components/PersonOnOrder'
import PersonToOrder from '~/components/PersonToOrder'
import GenderSelector, { Gender } from '~/components/GenderSelector'
import { OutletContext, Person } from '~/root'

/*
- show already added people
- if no people added, show gender select to add 1 person
- if click on add new person, validate inputs and add the person to added people and show gender select again
- after click on gender select, show empty form
*/

export default function NewOrder() {
	const { translator, order, setOrder } = useOutletContext<OutletContext>()
	const [selectedGender, selectGender] = useState<Gender>()
	const [newPersonInfo, setNewPersonInfo] = useState<Person>({ requirements: [] } as unknown as Person)
	const [editingPerson, setEditingPerson] = useState<number>()

	const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
		if (e.target.name == 'requirements') {
			if (!newPersonInfo.requirements) newPersonInfo.requirements = []
			newPersonInfo.requirements[0] = { description: e.target.value }
		} else {
			newPersonInfo[e.target.name] = e.target.value
		}
		setNewPersonInfo({ ...newPersonInfo }) //mutuju to aby se mi ta hodnota hned přepsala (kvůli valiaci) - připadá mi že to ničemu nevadí @foly
	}

	const savePerson = (details: Person, id?: number) => {
		if (id !== undefined) {
			order.persons[id] = details
		} else {
			order.persons.push(details)
		}
		setOrder(order)
	}

	const pickGender =
		(gender: Gender): MouseEventHandler =>
		(e) => {
			e.preventDefault()
			selectGender(gender)
			// newPersonInfo["gender"] = gender;
			if (gender == 'kid') {
				newPersonInfo.adult = false
				newPersonInfo.sex = 'man'
			} else {
				newPersonInfo.adult = true
				newPersonInfo.sex = gender
			}
			setNewPersonInfo(newPersonInfo)
		}
	const navigate = useNavigate()

	const nextForm = () => {
		savePerson(newPersonInfo, editingPerson)
		navigate('/summary', { replace: false })
	}

	const addNextPerson: MouseEventHandler = (event) => {
		event.preventDefault()
		savePerson(newPersonInfo, editingPerson)
		cleanPersonForm()
	}

	const cleanPersonForm = () => {
		selectGender(undefined)
		setEditingPerson(undefined)
		setNewPersonInfo({ requirements: [] } as unknown as Person)
	}

	useEffect(() => {
		if (editingPerson !== undefined) {
			selectGender(!order.persons[editingPerson].adult ? 'kid' : order.persons[editingPerson].sex)
			setNewPersonInfo(order.persons[editingPerson])
			delete order.persons[editingPerson]
			setOrder({ ...order })
		}
	}, [editingPerson])

	function checkAddForm(): boolean {
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
	function checkNextButton(): boolean {
		const addform: boolean = checkAddForm()
		if (order.persons.length > 0 || !addform) {
			//sorry, weird logic I know
			return false
		}
		return true
	}

	return (
		<div className="flex flex-col">
			<div className="w-full mx-auto">
				<div className="flex items-center mb-6 md:mb-12">
					<button
						onClick={() => navigate('/')}
						className="items-center ml-1 mt-1 text-[#0A9DBF] border-0 py-2 px-4 focus:outline-none outline  outline-[#0A9DBF] rounded-full  font-semibold text-lg hover:bg-[#eb2f06] hover:text-[#F8EBDB] hover:outline-[#eb2f06] fill-[#0A9DBF] hover:fill-[#F8EBDB]"
					>
						<svg width="16" height="18" xmlns="http://www.w3.org/2000/svg">
							<path d="m.293 8.293 4-4a1 1 0 1 1 1.414 1.414L3.415 8H15a1 1 0 1 1 0 2H3.415l2.294 2.294a1 1 0 1 1-1.414 1.414l-4-4a.997.997 0 0 1-.002-1.414Z" />
						</svg>
					</button>
					<h1 className="sm:text-3xl text-2xl font-bold title-font text-gray-800 ml-6">
						{translator.translate('order')}
					</h1>
				</div>
			</div>

			{order.persons && order.persons.length ? (
				order.persons.map((item, key) => {
					return (
						<PersonOnOrder key={key} details={item} editItem={() => setEditingPerson(key)} translator={translator} />
					)
				})
			) : (
				<div className="text-[#0A9DBF] font-medium my-5">{translator.translate('who_is_wearing')}</div>
			)}
			{order.persons && order.persons.length > 0 && (
				<h1 className="sm:text-3xl text-2xl font-bold title-font text-gray-800 ml-6 py-6">
					{translator.translate('add_person_to_order')}
				</h1>
			)}
			{!selectedGender ? (
				<GenderSelector translator={translator} selectGender={pickGender} />
			) : (
				<PersonToOrder
					currentPerson={newPersonInfo}
					translator={translator}
					selectedGender={selectedGender}
					handleInputChange={handleInputChange}
					discardPerson={cleanPersonForm}
				/>
			)}
			<nav className="p-4 w-full flex flex-wrap gap-8 justify-center md:justify-start fixed bottom-0 inset-x-0 bg-[#F8EBDB]">
				{newPersonInfo?.fullname && (
					<button
						onClick={addNextPerson}
						disabled={checkAddForm()}
						className="items-center border-0 py-2 px-4 focus:outline-none outline  rounded-full  font-semibold text-lg bg-[#eb2f06] disabled:bg-[#eb2f06] text-[#F8EBDB] outline-[#eb2f06] hover:text-[#eb2f06] hover:bg-[#F8EBDB] disabled:opacity-20 disabled:text-[#F8EBDB] disabled:outline-[#eb2f06]"
					>
						{translator.translate('add_person')}
					</button>
				)}
				<button
					disabled={checkNextButton()}
					onClick={nextForm}
					className="text-[#0A9DBF] disabled:text-[#0A9DBF] border-0 py-2 px-4 focus:outline-none outline  outline-[#0A9DBF] disabled:outline-[#0A9DBF] rounded-full  font-semibold text-lg hover:bg-[#eb2f06] disabled:bg-[#F8EBDB] hover:text-[#F8EBDB] hover:outline-[#eb2f06] disabled:opacity-20"
				>
					{translator.translate('to_confirm')}
				</button>
			</nav>
		</div>
	)
}
