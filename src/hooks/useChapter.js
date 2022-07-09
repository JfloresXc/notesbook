import { useCallback, useContext } from "react"
import { postChapter } from "../services/chapters/postChapter"
import { putChapter } from "../services/chapters/putChapter"
import { useLocation } from "wouter"
import { deleteChapter as removeChapter } from "../services/chapters/deleteChapter"
import { showChapter } from "../services/chapters/showChapter"
import { deleteNote } from "../services/notes/deleteNote"
import { Context as GlobalContext } from "../context/GlobalContext"
import { useAlert } from "./useAlert"
import { useUser } from "./useUser"

export const useChapter = ({ id } = {}) => {
	const { chapter, setChapter, chapters, getChapters, notes } =
		useContext(GlobalContext)
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
			getChapters()
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
			getChapters()
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

	const getChapter = useCallback(
		({ id }) => {
			const idChapter = id
			const chapterFinded = chapters?.find(
				({ id }) => id === idChapter
			)
			setChapter({ ...chapterFinded })
		},
		[chapters]
	)

	const deleteChapter = async () => {
		try {
			let idChapterOwn
			notes?.forEach(async (noteKey) => {
				idChapterOwn = noteKey.idChapter
				if (idChapterOwn === id) {
					await deleteNote({ idNote: noteKey.id })
				}
			})

			await removeChapter({ idChapter: id })
			getChapters()
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
			const idChapter = id
			const chapterFinded = chapters?.find(
				({ id }) => id === idChapter
			)
			await showChapter({ chapter: chapterFinded, id })
			getChapters()
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
