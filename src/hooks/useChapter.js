import { useContext } from "react"
import { useLocation } from "wouter"

import { getChapter as getChapterService } from "../services/chapters/getChapter"
import { deleteChapter as removeChapter } from "../services/chapters/deleteChapter"
import { postChapter } from "../services/chapters/postChapter"
import { putChapter } from "../services/chapters/putChapter"
import { showChapter } from "../services/chapters/showChapter"
import { deleteNote } from "../services/notes/deleteNote"

import { Context as SingleContext } from "../context/SingleContext"
import { Context as NotesContext } from "../context/NotesContext"

import { useAlert } from "./useAlert"
import { useUser } from "./useUser"
import { useChapters } from "./useChapters"
import { useCallback } from "react"

export const useChapter = ({ id } = {}) => {
	const { chapter, setChapter } = useContext(SingleContext)
	const { notes } = useContext(NotesContext)
	const { chapters } = useChapters()

	const { userGlobal } = useUser()
	const { setAlertTime } = useAlert()
	const setLocation = useLocation()[1]

	const addChapter = async (data) => {
		try {
			const { title, description, file } = data
			const [fileImage] = file
			const chapter = {
				title,
				description,
				hidden: true,
				date: new Date().toLocaleDateString(),
				idUser: userGlobal?.uid,
			}
			setLocation(`/chapters`)
			await postChapter({ chapter, file: fileImage })
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

	const updateChapter = async ({ chapter, file }) => {
		try {
			await putChapter({ chapter, id, file })
			setLocation(`/chapters`)
			setAlertTime({
				message: "✅ Editado satisfactoriamente ✅",
				success: true,
			})
		} catch (error) {
			setAlertTime({
				message: error.code,
				success: false,
			})
		}
	}

	const getChapter = async ({ id }) => {
		const chapter = await getChapterService({ id })
		setChapter({ ...chapter })
	}

	const deleteChapter = async (id) => {
		try {
			let idChapterOwn = id
			notes?.forEach(async (noteKey) => {
				idChapterOwn = noteKey.idChapter
				if (idChapterOwn === id) {
					await deleteNote({ idNote: noteKey.id })
				}
			})

			await removeChapter({ idChapter: id })
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

	const hideChapter = async (id) => {
		try {
			const idChapter = id
			const chapterFinded = chapters?.find(
				(chapterKey) => chapterKey.id === idChapter
			)
			await showChapter({ chapter: chapterFinded, id })
			setAlertTime({
				message: `✅ Capítulo a ${
					chapterFinded?.hidden ? "público" : "privado"
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
		addChapter,
		updateChapter,
		getChapter,
		deleteChapter,
		hideChapter,
		setChapter,
		chapter,
	}
}
