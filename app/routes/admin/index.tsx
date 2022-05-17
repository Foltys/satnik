import { User } from '@prisma/client'
import { useEffect } from 'react'
import { useNavigate, useOutletContext } from 'remix'

export default function Admin() {
	const navigate = useNavigate()
	const { user } = useOutletContext<{ user: User }>()
	useEffect(() => {
		navigate(user.admin ? 'table' : 'list', { replace: true })
	}, [user])
	return null
}
