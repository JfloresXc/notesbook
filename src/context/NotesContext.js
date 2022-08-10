import React, { useState } from "react"

export const Context = React.createContext({})

export default function NotesContext({ children }) {
	const [notes, setNotes] = useState([])

	return (
		<Context.Provider
			value={{
				notes,
				setNotes,
			}}
		>
			{children}
		</Context.Provider>
	)
}
