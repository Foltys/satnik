const {MongoClient, ObjectID} = require('mongodb')
const Ajv = require('ajv')

const ajv = new Ajv()

const mongoConnstring = 'mongodb://localhost:27017'
const mongoDatabase = 'wardrobe'
const mongoCollection = 'orders'

let mongo
async function getMongo () {
	if (mongo) return mongo
	mongo = new MongoClient(mongoConnstring);
	await mongo.connect()
	// await client.close()
	return mongo
}
async function getMongoCollection () {
	const mongo = await getMongo();
	const database = mongo.db(mongoDatabase)
	const collection = database.collection(mongoCollection)
	return collection
}

const requirementSchema = {
	type: "object",
	properties: {
		type: {type: "string"},
		description: {type: "string"},
	},
	required: [
		"type",
		"description",
	],
	additionalProperties: false,
}
const personSchema = {
	type: "object",
	properties: {
		type: {enum: ["man", "woman", "child"]},
		fullname: {type: "string"},
		age: {type: "integer"},
		clothing_size: {type: "string"},
		shoe_size: {type: "string"},
		requirements: {type: "array", items: requirementSchema},
	},
	required: [
		"type",
		"fullname",
		"age",
		"clothing_size",
		"shoe_size",
		"requirements",
	],
	additionalProperties: false,
}
const orderSchema = {
	type: "object",
	properties: {
		fullname: {type: "string"},
		phone: {type: "string"},
		email: {type: "string"},
		delivery_type: {type: "string"},
		delivery_fullname: {type: "string"},
		delivery_street: {type: "string"},
		delivery_city: {type: "string"},
		delivery_zip: {type: "string"},
		delivery_phone: {type: "string"},
		delivery_time: {},
		persons: {type: "array", items: personSchema},
		state: {enum: ["open"]},
		created_at: {},
		updated_at: {},
	},
	required: [
		"fullname",
		"phone",
		"email",
		"delivery_type",
		"delivery_fullname",
		"delivery_street",
		"delivery_city",
		"delivery_zip",
		"delivery_phone",
		"delivery_time",
		"persons",
		"state",
		"created_at",
		"updated_at",
	],
	additionalProperties: false,
}

const validateOrder = ajv.compile(orderSchema)

const saveNewOrder = async function (order) {
	order.created_at = new Date()
	order.updated_at = new Date()
	order.state = 'open'

	if (!validateOrder(order)) throw new Error(validateOrder.errors)

	const collection = await getMongoCollection()
	const result = await collection.insertOne(order)
	order._id = result.insertedId
	return order
}

const findOrder = async function (filter) {
	const collection = await getMongoCollection()
	return await collection.findOne(filter)
}

const updateOrder = async function (_id, order) {
	const collection = await getMongoCollection()
	order.updated_at = new Date()

	if (!validateOrder(order)) throw new Error(validateOrder.errors)

	return await collection.updateOne({_id: ObjectID(_id)}, order)
}

exports.default = {saveNewOrder, findOrder, updateOrder}
