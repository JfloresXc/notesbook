import React from "react"
import Navbar from "../../components/navbar"
import Routes from "../../components/routes"
import Footer from "../../components/footer"
import Loading from "../../components/loading"
import { useUser } from "../../hooks/useUser"

export default function PageGlobal() {
	const { loading } = useUser()

	if (loading) return <Loading complete={true} />

	return (
		<>
			<Navbar />
			<Routes />
			<Footer />
		</>
	)
}
