import { useContext, useEffect, useState } from "react"
import { getNotes as getNotesService } from "../services/notes/getNotes"
import { Context as NotesContext } from "../context/NotesContext"
import { useUser } from "./useUser"

export const useNotes = () => {
	const { notes, setNotes } = useContext(NotesContext)
	const { userGlobal, validateUserCondition } = useUser()
	const [isLoading, setLoading] = useState(false)

	useEffect(() => {
		getNotes()
	}, [userGlobal])

	const getNotes = () => {
		setLoading(true)
		const conditionWhere = validateUserCondition()
		getNotesService({ consultation: conditionWhere }).then((notesKey) => {
			setNotes(notesKey)
			setLoading(false)
		})
	}

	return {
		notes,
		setNotes,
		getNotes,
		isLoading,
	}
}
