const { PrismaClient } = require('@prisma/client')

let db

exports.getDB = function () {
	if (db) {
		return db
	}
	db = new PrismaClient()
	db.$connect()
	return db
}
