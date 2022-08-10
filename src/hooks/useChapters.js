import { useContext, useEffect, useState } from "react"
import { Context as GlobalContext } from "../context/GlobalContext"
import { useUser } from "./useUser"
import { getChapters as getChaptersService } from "../services/chapters/getChapters"

export const useChapters = () => {
	const { chapters, setChapters } = useContext(GlobalContext)
	const { userGlobal, validateUserCondition } = useUser()
	const [isLoading, setLoading] = useState(false)

	useEffect(() => {
		getChapters()
	}, [userGlobal])

	const getChapters = () => {
		setLoading(true)
		const conditionWhere = validateUserCondition()
		getChaptersService({ consultation: conditionWhere }).then(
			(chaptersKey) => {
				setChapters(chaptersKey)
				setLoading(false)
			}
		)
	}

	return {
		chapters,
		setChapters,
		getChapters,
		isLoading,
	}
}
