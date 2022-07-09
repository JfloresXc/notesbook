import { useContext } from "react"
import { Context as AlertContext } from "../context/AlertContext"
import { putAlert } from "../services/alerts/putAlert"

export const useAlert = () => {
	const { alert, setAlert } = useContext(AlertContext)

	const setAlertTime = ({ message, success }) => {
		setAlert({ message, success, activated: true })
		setTimeout(() => {
			setAlert({ ...alert, activated: false })
		}, 4000)
	}

	const updateAlert = async ({ message }) => {
		await putAlert({ message })
	}

	return {
		alert,
		setAlertTime,
		updateAlert,
	}
}
