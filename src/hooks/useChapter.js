import { useContext } from "react"
import { postChapter } from "../services/chapters/postChapter"
import { putChapter } from "../services/chapters/putChapter"
import { useLocation } from "wouter"
import { deleteChapter as removeChapter } from "../services/chapters/deleteChapter"
import { getChapter as getChapterService } from "../services/chapters/getChapter"
import { showChapter } from "../services/chapters/showChapter"
import { deleteNote } from "../services/notes/deleteNote"
import { useNotes } from "./useNotes"
import { Context as GlobalContext } from "../context/GlobalContext"
import { useAlert } from "./useAlert"
import { useUser } from "./useUser"

export const useChapter = ({ id } = {}) => {
	const { chapter, setChapter, chapters } = useContext(GlobalContext)
	const { userGlobal } = useUser()
	const { notes } = useNotes()
	const { setAlertTime } = useAlert()
	const [_, setLocation] = useLocation()

	const addChapter = async (data) => {
		try {
			const { title, description, file } = data
			const [fileImage] = file
			const chapter = {
				title,
				description,
				hidden: false,
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

	const getChapter = async () => {
		const idChapter = id
		const chapter = chapters?.find(({ id }) => id == idChapter)
		if (chapter) return { ...chapter }
		// else return { ...(await getChapterService({ id })) }
	}

	const deleteChapter = async () => {
		try {
			let idChapterOwn
			notes?.forEach(async (noteKey) => {
				idChapterOwn = noteKey.idChapter
				if (idChapterOwn == id) {
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

	const hideChapter = async () => {
		try {
			const chapter = await getChapter()
			await showChapter({ chapter, id })
			setAlertTime({
				message: `✅ Capítulo ${
					chapter?.hidden ? "público" : "privado"
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
