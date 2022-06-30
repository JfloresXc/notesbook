import { useContext, useCallback } from "react"
import { useLocation } from "wouter"
import { postNote } from "../services/notes/postNote"
import { getNote as getNoteService } from "../services/notes/getNote"
import { putNote } from "../services/notes/putNote"
import { showNote } from "../services/notes/showNote"
import { deleteNote as removeNote } from "../services/notes/deleteNote"
import { Context as GlobalContext } from "../context/GlobalContext"

import { useAlert } from "./useAlert"
import { useUser } from "./useUser"

export const useNote = ({ id } = {}) => {
	const { note, setNote, notes } = useContext(GlobalContext)
	const [_, setLocation] = useLocation()
	const { setAlertTime } = useAlert()
	const { userGlobal } = useUser()

	const addNote = async (data) => {
		try {
			const { idChapter, title, description, file } = data
			const [fileImage] = file
			const note = {
				idChapter,
				idUser: userGlobal?.uid,
				title,
				description,
				hidden: false,
				date: new Date().toLocaleDateString(),
			}
			await postNote({ note, file: fileImage })
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
			console.log(error)
		}
	}

	const updateNote = async ({ note, file }) => {
		try {
			await putNote({ note, id, file })
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

	const getNote = useCallback(
		({ id }) => {
			// if (notes?.length === 0) {
			// 	const note = await getNoteService({ id })
			// 	setNote({ ...note })
			// }

			const idNote = id
			const noteFinded = notes?.find(({ id }) => id == idNote)
			setNote({ ...noteFinded })
		},
		[notes]
	)

	const deleteNote = async () => {
		try {
			await removeNote({ idNote: id })
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
			const noteFinded = notes?.find(({ id }) => id == idNote)
			await showNote({ note: noteFinded, id })
			setAlertTime({
				message: `✅ Nota ${
					note?.hidden ? "pública" : "privada"
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
	}
}
