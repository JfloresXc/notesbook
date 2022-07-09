import React from "react"
import FormAlert from "../../components/form/FormAlert"
import "./index.css"

export default function AlertAdd() {
	return (
		<div className="page alert-add">
			<FormAlert buttonMessage={"Agregar comentario"} />
		</div>
	)
}
