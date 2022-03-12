const Ajv = require('ajv')
const {prepareOrderForPrismaInsert} = require('../helpers')
const {getDB} = require('../getDB')
const ajv = new Ajv()

const requirementSchema = {
	type: 'object',
	properties: {
		description: {type: 'string'},
	},
	required: ['description'],
	additionalProperties: false,
}
const personSchema = {
	type: 'object',
	properties: {
		sex: {enum: ['man', 'woman']},
		adult: {type: 'boolean'},
		fullname: {type: 'string'},
		age: {type: 'integer'},
		clothing_size: {type: 'string'},
		shoe_size: {type: 'string'},
		requirements: {type: 'array', items: requirementSchema},
	},
	required: [
		'sex',
		'adult',
		'fullname',
		'age',
		'clothing_size',
		'shoe_size',
		'requirements',
	],
	additionalProperties: false,
}
const orderSchema = {
	type: 'object',
	properties: {
		fullname: {type: 'string'},
		phone: {type: 'string'},
		email: {type: 'string'},
		delivery_type: {enum: ['delivery', 'pickup']},
		delivery_fullname: {type: 'string'},
		delivery_street: {type: 'string'},
		delivery_city: {type: 'string'},
		delivery_zip: {type: 'string'},
		delivery_phone: {type: 'string'},
		delivery_time: {},
		persons: {type: 'array', items: personSchema},
		state: {enum: ['open']},
		lang: {enum: ['ua', 'cs']},
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
		'created_at',
		'updated_at',
	],
	additionalProperties: false,
}

const validateOrder = ajv.compile(orderSchema)

const saveNewOrder = async function (order) {
	order.state = 'open'

	if (!validateOrder(order)) {
		throw new Error(validateOrder.errors)
	}

	order = prepareOrderForPrismaInsert(order)
	return await getOrderModel().create({data: order})
}
const getOrderByID = async function (id) {
	return await findUniqueOrder({id})
}

/**
 * for query read https://www.prisma.io/docs/concepts/components/prisma-client/crud#read
 * @param query
 * @returns {Promise<*>}
 */
const findUniqueOrder = async function (query) {
	return await getOrderModel().findUnique({
		where: query,
		include: getIncludes(),
	})
}

/**
 * for query read https://www.prisma.io/docs/concepts/components/prisma-client/crud#read
 * @param query
 * @returns {Promise<*>}
 */
const findFirst = async function (query) {
	return await getOrderModel().findFirst({
		where: query,
		include: getIncludes(),
	})
}

function getIncludes () {
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
const getOrderModel = function () {
	return getDB().order
}

module.exports = {getOrderModel, saveNewOrder, findUniqueOrder, findFirst, getOrderByID}
