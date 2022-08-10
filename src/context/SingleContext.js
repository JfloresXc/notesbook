import React, { useState } from "react"
import { Note as NoteModel } from "../models/Note"
import { Chapter as ChapterModel } from "../models/Chapter"

export const Context = React.createContext({})

export default function SingleContext({ children }) {
	const [note, setNote] = useState(new NoteModel())
	const [chapter, setChapter] = useState(new ChapterModel())
	const [loading, setLoading] = useState(false)

	return (
		<Context.Provider
			value={{
				loading,
				setLoading,
				note,
				setNote,
				chapter,
				setChapter,
			}}
		>
			{children}
		</Context.Provider>
	)
}
