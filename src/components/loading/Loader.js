import React from "react"
import Loading from "../loading"
import { useLoading } from "../../hooks/useLoading"

export default function Loader({ children }) {
	const { loading } = useLoading()

	return <>{loading ? <Loading /> : <>{children}</>}</>
}
