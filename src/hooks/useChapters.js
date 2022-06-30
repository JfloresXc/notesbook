import { useContext } from "react"
import { Context as GlobalContext } from "../context/GlobalContext"

export const useChapters = () => {
	const { chapters, setChapters } = useContext(GlobalContext)

	return {
		chapters,
		setChapters,
	}
}
