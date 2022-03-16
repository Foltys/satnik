import { PrismaClient } from '@prisma/client'

let db: PrismaClient

export async function getDB() {
	if (db) {
		return db
	}
	db = new PrismaClient()
	await db.$connect()
	return db
}
