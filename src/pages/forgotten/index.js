import React from "react"
import FormForgotten from "../../components/form/FormForgotten"
import "./index.css"

export default function Forgotten() {
	return (
		<div className="page forgotten">
			<FormForgotten buttonMessage={"Reestablecer contraseña"} />
		</div>
	)
}
