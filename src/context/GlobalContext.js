import React, { useState, useEffect, useCallback } from "react"
import { Note as NoteModel } from "../models/Note"
import { Chapter as ChapterModel } from "../models/Chapter"
import { where } from "firebase/firestore"
import { useUser } from "../hooks/useUser"
import { useAlert } from "../hooks/useAlert"
import { getChapters as getChaptersService } from "../services/chapters/getChapters"
import { getNotes as getNotesService } from "../services/notes/getNotes"
import { onSnapshot, collection } from "firebase/firestore"
import { db } from "../firebase"

export const Context = React.createContext({})

export default function GlobalContext({ children }) {
	const [notes, setNotes] = useState([])
	const [chapters, setChapters] = useState([])
	const [note, setNote] = useState(new NoteModel())
	const [chapter, setChapter] = useState(new ChapterModel())
	const [loading, setLoading] = useState(false)
	const { updateAlert, setAlertTime } = useAlert()

	const { userGlobal } = useUser()

	useEffect(() => {
		setLoading(true)
		getChapters()
		getNotes()
	}, [userGlobal])

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

	const getChapters = () => {
		let conditionWhere = validateUserState()
		getChaptersService({ consultation: conditionWhere }).then(
			(chaptersKey) => {
				setChapters(chaptersKey)
				setLoading(false)
			}
		)
	}

	const getNotes = () => {
		let conditionWhere = validateUserState()
		getNotesService({ consultation: conditionWhere }).then((notesKey) => {
			setNotes(notesKey)
		})
	}

	const validateUserState = useCallback(() => {
		if (userGlobal) {
			if (userGlobal.displayName === "administrator") {
				return where("hidden", "==", false)
			} else if (userGlobal.displayName === "user") {
				return where("idUser", "==", userGlobal?.uid)
			}
		} else {
			return where("hidden", "==", false)
		}
	}, [userGlobal])

	return (
		<Context.Provider
			value={{
				notes,
				setNotes,
				getNotes,
				chapters,
				setChapters,
				getChapters,
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
