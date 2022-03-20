import { getDB } from '~/../prisma/getDB'
import { Order, Person } from '~/root'
import { prepareOrderForPrismaInsert } from '~/../prisma/helpers'
import Ajv from 'ajv'
// const { getDB } = require('../getDB')
const ajv = new Ajv()

const requirementSchema = {
	type: 'object',
	properties: {
		description: { type: 'string' },
	},
	required: ['description'],
	additionalProperties: false,
}
const personSchema = {
	type: 'object',
	properties: {
		sex: { enum: ['man', 'woman'] },
		adult: { type: 'boolean' },
		fullname: { type: 'string' },
		age: { type: 'string' },
		clothing_size: { type: 'string' },
		shoe_size: { type: 'string' },
		requirements: { type: 'array', items: requirementSchema },
	},
	required: ['sex', 'adult', 'fullname', 'age', 'clothing_size', 'shoe_size', 'requirements'],
	additionalProperties: false,
}
const orderSchemaTypeDelivery = {
	type: 'object',
	properties: {
		fullname: { type: 'string' },
		phone: { type: 'string' },
		email: { type: 'string' },
		delivery_type: { const: 'delivery' },
		delivery_fullname: { type: 'string' },
		delivery_street: { type: 'string' },
		delivery_city: { type: 'string' },
		delivery_zip: { type: 'string' },
		delivery_phone: { type: 'string' },
		persons: { type: 'array', items: personSchema },
		state: { enum: ['open'] },
		lang: { enum: ['ua', 'cs'] },
		created_at: {},
		updated_at: {},
	},
	required: [
		'fullname',
		'phone',
		'email',
		'delivery_type',
		'delivery_fullname',
		'delivery_street',
		'delivery_city',
		'delivery_zip',
		'delivery_phone',
		'persons',
		'state',
	],
	additionalProperties: false,
}
const orderSchemaTypePickup = {
	type: 'object',
	properties: {
		fullname: { type: 'string' },
		phone: { type: 'string' },
		email: { type: 'string' },
		delivery_type: { const: 'pickup' },
		persons: { type: 'array', items: personSchema },
		state: { enum: ['open'] },
		lang: { enum: ['ua', 'cs'] },
		created_at: {},
		updated_at: {},
	},
	required: ['fullname', 'phone', 'email', 'delivery_type', 'persons', 'state'],
	additionalProperties: false,
}
const orderSchema = {
	type: 'object',
	anyOf: [orderSchemaTypeDelivery, orderSchemaTypePickup],
}

const validateOrder = ajv.compile(orderSchema)

const normaliseOrder = function (order: Order) {
	order.persons.map((person: Person) => {
		person.age = person.age + ''
	})
}
const saveNewOrder = async function (order: Order) {
	console.log(order)
	order.state = 'open'

	normaliseOrder(order)

	if (!validateOrder(order)) {
		console.log(validateOrder.errors)
		throw new Error(JSON.stringify(validateOrder.errors))
	}

	order = prepareOrderForPrismaInsert(order)
	return (await getOrderModel()).create({ data: order as any })
}
const getOrderByID = async function (id: number) {
	return await findUniqueOrder({ id })
}

/**
 * for query read https://www.prisma.io/docs/concepts/components/prisma-client/crud#read
 * @param query
 * @returns {Promise<*>}
 */
const findUniqueOrder = async function (query: any) {
	return (await getOrderModel()).findUnique({
		where: query,
		include: getIncludes(),
	})
}

/**
 * for query read https://www.prisma.io/docs/concepts/components/prisma-client/crud#read
 * @param query
 * @returns {Promise<*>}
 */
const findFirst = async function (query: any) {
	return (await getOrderModel()).findFirst({
		where: query,
		include: getIncludes(),
	})
}

function getIncludes() {
	return {
		persons: {
			include: {
				requirements: true,
			},
		},
	}
}

/**
 * for model usage read https://www.prisma.io/docs/concepts/components/prisma-client/crud#read
 */
const getOrderModel = async function () {
	return (await getDB()).order
}

export { getOrderModel, saveNewOrder, findUniqueOrder, findFirst, getOrderByID }
