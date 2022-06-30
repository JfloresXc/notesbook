import { useContext } from "react"
import { Context as UserContext } from "../context/UserContext"
import { validateError } from "../services/utils"
import { login as signIn } from "../services/auth/login"
import { signup as register } from "../services/auth/signup"
import { logout as singOut } from "../services/auth/logout"
import { postUser } from "../services/users/postUser"
import { useAlert } from "./useAlert"
import { useLocation } from "wouter"

export const useUser = () => {
	const { userGlobal, setUserGlobal, loading, setLoading } =
		useContext(UserContext)
	const { setAlertTime } = useAlert()
	const setLocation = useLocation()[1]

	const login = async ({ email, password }) => {
		try {
			const { user } = await signIn({ email, password })
			if (user) setUserGlobal(...user)

			setAlertTime({
				message: "✅ Bienvenido compañero ✅",
				success: true,
			})
		} catch ({ code }) {
			let message
			if (validateError(code)) {
				message = validateError(code)
				setAlertTime({ message, success: false })
			}
		}
	}

	const signup = async ({ email, password }) => {
		try {
			const data = await register({ email, password })
			const { user } = data.user
			const userOwn = {
				date: new Date().toLocaleDateString(),
				email,
				rol: "user",
			}
			await postUser({ user: { ...userOwn }, idUser: user?.uid })
			if (user) setUserGlobal(...user)

			setAlertTime({
				message: "✅ Bienvenido compañero ✅",
				success: true,
			})
		} catch ({ code }) {
			let message
			if (validateError(code)) {
				message = validateError(code)
				setAlertTime({ message, success: false })
			}
		}
	}

	const logout = async () => {
		await singOut()
		setLocation("/")
		setUserGlobal(null)
	}

	return {
		login,
		signup,
		logout,
		userGlobal,
		setUserGlobal,
		loading,
		setLoading,
	}
}
