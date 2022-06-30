import React, { useState } from "react"

export const Context = React.createContext({})

export default function AlertContext({ children }) {
	const [alert, setAlert] = useState({
		message: "",
		success: null,
		activated: false,
	})

	return (
		<Context.Provider value={{ alert, setAlert }}>
			{children}
		</Context.Provider>
	)
}
