import React from "react"
import { FormLogin } from "../../components/form"
import "./index.css"

export default function Signup() {
	return (
		<div className="page signup">
			<FormLogin
				buttonMessage={"Registrate"}
				submit={true}
				isRegister={true}
			/>
		</div>
	)
}
