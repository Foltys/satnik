import { MongoClient } from 'mongodb'
import { Ajv } from 'ajv'
const ajv = new Ajv()

const mongoConnstring = ''
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
		requirements: {type: "array", items: requirementSchema},
	},
	required: [
		"type",
		"fullname",
		"age",
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
		delivery_time: {type: "timestamp"},
		persons: {type: "array", items: personSchema}
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
	],
	additionalProperties: false,
}

const validateOrder = ajv.compile(orderSchema)

export default function createOrder (order) {
	if (!validateOrder(order)) throw new Error(validateOrder.errors)
	return {
		save: async function () {
			const collection = await getMongoCollection()
			await collection.insertOne(order)
		},
	}

}
