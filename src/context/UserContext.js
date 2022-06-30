import React, { useState } from "react"
import { auth } from "../firebase"

export const Context = React.createContext({})

export default function UserContext({ children }) {
	const [userGlobal, setUserGlobal] = useState(null)
	const [loading, setLoading] = useState(true)

	auth.onAuthStateChanged((user) => {
		if (user) setUserGlobal(user)
		setLoading(false)
	})

	return (
		<Context.Provider
			value={{ userGlobal, setUserGlobal, loading, setLoading }}
		>
			{children}
		</Context.Provider>
	)
}
