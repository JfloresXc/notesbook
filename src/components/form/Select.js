import React from "react"
import "./index.css"

export default function Select({
	options = [],
	labelMessage = "Not label message",
	name,
	register,
	errors,
	required,
}) {
	const optionsRendered = options.map(({ id, title }) => {
		return (
			<option key={id} value={id}>
				{title}
			</option>
		)
	})

	return (
		<div className="form__group">
			<label className="label">{labelMessage}</label>
			<select className="select" {...register(name, { required })}>
				<option value={""} disabled>
					{"Selecciona una opcion"}
				</option>
				{optionsRendered}
			</select>
			{errors[name]?.type === "required" && (
				<span className="input__error">
					Este campo es requerido
				</span>
			)}
		</div>
	)
}
