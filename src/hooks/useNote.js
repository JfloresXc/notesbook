import { useContext, useState } from "react"
import { useLocation } from "wouter"
import { postNote } from "../services/notes/postNote"
import { getNote as getNoteService } from "../services/notes/getNote"
import { putNote } from "../services/notes/putNote"
import { showNote } from "../services/notes/showNote"
import { deleteNote as removeNote } from "../services/notes/deleteNote"
import { Context as SingleContext } from "../context/SingleContext"

import { useAlert } from "./useAlert"
import { useUser } from "./useUser"
import { useNotes } from "./useNotes"

export const useNote = ({ id } = {}) => {
	const { note, setNote } = useContext(SingleContext)
	const setLocation = useLocation()[1]
	const { setAlertTime } = useAlert()
	const { userGlobal } = useUser()
	const { notes, getNotes } = useNotes()
	const [isLoading, setLoading] = useState(false)

	const addNote = async (data) => {
		try {
			const { idChapter, title, description, file } = data
			const [fileImage] = file
			const note = {
				idChapter,
				idUser: userGlobal?.uid,
				title,
				description,
				hidden: true,
				date: new Date().toLocaleDateString(),
			}
			await postNote({ note, file: fileImage })
			getNotes()
			setLocation(`/notes/${idChapter}`)
			setAlertTime({
				message: "✅ Agregado satisfactoriamente ✅",
				success: true,
			})
		} catch (error) {
			setAlertTime({
				message: error.code,
				success: false,
			})
		}
	}

	const updateNote = async ({ note, file }) => {
		try {
			await putNote({ note, id, file })
			getNotes()
			setLocation(`/notes/note/${id}`)
			setAlertTime({
				message: "✅ Editado satisfactoriamente ✅",
				success: true,
			})
		} catch (error) {
			setAlertTime({
				message: error.code,
				success: true,
			})
		}
	}

	const getNote = ({ id }) => {
		setLoading(true)
		getNoteService({ id }).then((note) => {
			setNote({ ...note })
			setLoading(false)
		})
	}

	const deleteNote = async () => {
		try {
			await removeNote({ idNote: id })
			getNotes()
			setAlertTime({
				message: "✅ Eliminado satisfactoriamente ✅",
				success: true,
			})
		} catch (error) {
			setAlertTime({
				message: error.message,
				success: false,
			})
		}
	}

	const hideNote = async () => {
		try {
			const idNote = id
			const noteFinded = notes?.find(({ id }) => id === idNote)
			await showNote({ note: noteFinded, id })
			getNotes()
			setAlertTime({
				message: `✅ Nota ${
					noteFinded?.hidden ? "pública" : "privada"
				} ✅`,
				success: true,
			})
		} catch (error) {
			setAlertTime({
				message: error.message,
				success: false,
			})
		}
	}

	return {
		addNote,
		updateNote,
		getNote,
		deleteNote,
		hideNote,
		setNote,
		note,
		isLoading,
	}
}
