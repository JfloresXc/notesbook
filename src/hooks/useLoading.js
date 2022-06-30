import { useContext } from "react"
import { Context as GlobalContext } from "../context/GlobalContext"

export const useLoading = () => {
	const { setLoading, loading } = useContext(GlobalContext)

	const showLoading = () => {
		setLoading(true)
	}

	const hideLoading = () => {
		setLoading(false)
	}

	return {
		loading,
		showLoading,
		hideLoading,
	}
}
