import React, { useState, useEffect, useCallback } from "react"
import { Note as NoteModel } from "../models/Note"
import { Chapter as ChapterModel } from "../models/Chapter"
import { where, query, collection, onSnapshot } from "firebase/firestore"
import { db } from "../firebase"
import { useUser } from "../hooks/useUser"

export const Context = React.createContext({})

export default function GlobalContext({ children }) {
	const [notes, setNotes] = useState([])
	const [chapters, setChapters] = useState([])
	const [note, setNote] = useState(new NoteModel())
	const [chapter, setChapter] = useState(new ChapterModel())
	const [loading, setLoading] = useState(false)

	const { userGlobal } = useUser()
	const chaptersRef = collection(db, "chapters")
	const notesRef = collection(db, "notes")

	useEffect(() => {
		setLoading(true)
		let conditionWhere = validateUserState()
		let consultation = query(chaptersRef, conditionWhere)
		setConsultationChapters({ consultation })
	}, [userGlobal])

	useEffect(() => {
		let conditionWhere = validateUserState()
		let consultation = query(notesRef, conditionWhere)
		setConsultationNotes({ consultation })
	}, [userGlobal])

	const validateUserState = useCallback(() => {
		if (!userGlobal) {
			return where("hidden", "==", false)
		} else {
			return where("idUser", "==", userGlobal?.uid)
		}
	}, [userGlobal])

	const setConsultationChapters = ({ consultation }) => {
		onSnapshot(consultation, ({ docs }) => {
			let data = []
			docs.map((docKey) => {
				data.push({ ...docKey.data(), id: docKey.id })
			})
			setLoading(false)
			setChapters(data)
		})
	}

	const setConsultationNotes = ({ consultation }) => {
		onSnapshot(consultation, ({ docs }) => {
			let data = []
			docs.map((docKey) => {
				data.push({ ...docKey.data(), id: docKey.id })
			})
			if (JSON.stringify(data) === JSON.stringify(notes)) return
			setNotes(data)
		})
	}

	return (
		<Context.Provider
			value={{
				notes,
				setNotes,
				chapters,
				setChapters,
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
