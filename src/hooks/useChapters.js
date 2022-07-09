import { useContext } from "react"
import { Context as GlobalContext } from "../context/GlobalContext"

export const useChapters = () => {
	const { chapters, setChapters, getChapters } = useContext(GlobalContext)

	return {
		chapters,
		setChapters,
		getChapters,
	}
}
