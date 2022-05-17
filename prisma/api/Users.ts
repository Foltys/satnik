import { getDB } from '~/../prisma/getDB'

export async function getPendingInvites() {
	return (await (await getDB()).pendingInvites.findMany({ select: { email: true } })).map((item) => item.email)
}
export async function convertInviteToUser(email: string, password?: string, gmailId?: string, name?: string) {
	const db = await getDB()
	const [user] = await db.$transaction([
		db.user.create({
			data: {
				admin: false,
				email,
				password,
				gmailId,
				name,
			},
		}),
		db.pendingInvites.deleteMany({ where: { email } }),
	])
	return user
}
export async function getUserByGmailId(gmailId: string) {
	return (await getDB()).user.findFirst({ where: { gmailId } })
}
export async function editUserInfo(id: string, email?: string, phone?: string) {
	return (await getDB()).user.update({
		where: { id },
		data: {
			email,
			phone,
		},
	})
}
