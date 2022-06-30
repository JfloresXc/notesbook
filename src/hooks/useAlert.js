import { useContext } from "react"
import { Context as AlertContext } from "../context/AlertContext"

export const useAlert = () => {
	const { alert, setAlert } = useContext(AlertContext)

	const setAlertTime = ({ message, success }) => {
		setAlert({ message, success, activated: true })
		setTimeout(() => {
			setAlert({ ...alert, activated: false })
		}, 4000)
	}

	return {
		alert,
		setAlertTime,
	}
}
