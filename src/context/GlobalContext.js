import React, { useState, useEffect } from "react"
import { useAlert } from "../hooks/useAlert"
import { onSnapshot, collection } from "firebase/firestore"
import { db } from "../firebase"

export const Context = React.createContext({})

export default function GlobalContext({ children }) {
	const [chapters, setChapters] = useState([])
	const { updateAlert, setAlertTime } = useAlert()

	useEffect(() => {
		onSnapshot(collection(db, "alerts"), async (alertsKey) => {
			let alert
			alertsKey.forEach((docKey) => (alert = docKey.data()))
			if (alert?.message) {
				setAlertTime({
					message: alert.message,
					success: true,
				})
				await updateAlert({ message: "" })
			}
		})
	}, [])

	return (
		<Context.Provider
			value={{
				chapters,
				setChapters,
			}}
		>
			{children}
		</Context.Provider>
	)
}
