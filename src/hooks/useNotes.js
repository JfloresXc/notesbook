import { useContext } from "react"
import { Context as GlobalContext } from "../context/GlobalContext"

export const useNotes = () => {
	const { notes, setNotes, getNotes } = useContext(GlobalContext)

	return {
		notes,
		setNotes,
		getNotes,
	}
}
