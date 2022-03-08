const Ajv = require('ajv')
const ajv = new Ajv()

const {MongoClient, ServerApiVersion} = require('mongodb')
const mongoConnstring = "mongodb+srv://wardrobedbuser:ZOn037y347Zh5qQF@cluster0.okmkf.mongodb.net/wardrobe?retryWrites=true&w=majority"
// const mongoConnstring = 'mongodb://localhost:27017'
const mongoDatabase = 'wardrobe'
const mongoCollection = 'orders'
const mongoOptions = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	serverApi: ServerApiVersion.v1,
}

let mongo

async function getMongo () {
	if (mongo) return mongo
	mongo = new MongoClient(mongoConnstring, mongoOptions)
	await mongo.connect()
	return mongo
}

async function getMongoCollection () {
	const mongo = await getMongo()
	const database = mongo.db(mongoDatabase)
	const collection = database.collection(mongoCollection)
	return collection
}

async function closeConnections () {
	await mongo.close()
	mongo = undefined
}

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
	order.created_at = new Date()
	order.updated_at = new Date()
	order.state = 'open'

	if (!validateOrder(order)) {
		throw new Error(validateOrder.errors)
	}

	const collection = await getMongoCollection()
	const result = await collection.insertOne(order)
	order._id = result.insertedId
	return order
}

const findOrder = async function (filter) {
	const collection = await getMongoCollection()
	return await collection.findOne(filter)
}

const listOrders = async function (
	filter = undefined,
	sort = undefined,
	skip = undefined,
	limit = undefined,
) {
	const collection = await getMongoCollection()
	const cursor = await collection.find(filter)
	if (sort) {
		cursor.sort(sort)
	}
	if (skip) {
		cursor.skip(skip)
	}
	if (limit) {
		cursor.limit(limit)
	}
	return await cursor.toArray()
}

const updateOrder = async function (_id, order) {
	const collection = await getMongoCollection()
	order.updated_at = new Date()

	delete order._id

	if (!validateOrder(order)) {
		throw new Error(validateOrder.errors)
	}

	return await collection.updateOne({_id}, {$set: order})
}

exports.default = {saveNewOrder, findOrder, listOrders, updateOrder}

async function cleanUpServer () {
	await closeConnections()
}

[`exit`, `SIGINT`, `SIGUSR1`, `SIGUSR2`, `uncaughtException`, `SIGTERM`].forEach((eventType) => {
	process.on(eventType, cleanUpServer.bind(null, eventType))
})
