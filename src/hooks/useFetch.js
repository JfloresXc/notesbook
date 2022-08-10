import { useCallback, useEffect, useState, useRef } from "react"

export function useFetch(url) {
	const [fetchData, setFetchData] = useState({
		isLoading: true,
		error: false,
		data: [],
	})
	const fetchRef = useRef(0)

	const doFetch = useCallback(async () => {
		try {
			const response = await fetch(url, {
				headers: {
					"Content-Type": "application/json",
				},
			})
			const { data } = await response.json()

			if (data) {
				setFetchData({
					isLoading: false,
					error: false,
					data,
				})
			}
		} catch (error) {
			setFetchData({
				isLoading: false,
				error: true,
				data: [],
			})
		}
	}, [url])

	useEffect(() => {
		if (fetchRef.current === 0) {
			doFetch()
			fetchRef.current++
		}
	}, [url, doFetch])

	const { data, isLoading, error } = fetchData

	return { data, isLoading, error, doFetch }
}
