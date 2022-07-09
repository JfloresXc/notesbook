import React from "react"
import "./index.css"

function Input({
	type = "text",
	labelMessage = "Not label message",
	name,
	placeholder,
	register,
	errors,
	required,
	pattern = "",
}) {
	return (
		<div className="form__group">
			<label className="label" htmlFor={name}>
				{labelMessage}
			</label>
			<input
				type={type}
				className="input"
				id={name}
				placeholder={placeholder}
				{...register(name, { required, pattern: pattern || "" })}
			/>
			{errors[name]?.type === "required" && (
				<span className="input__error">
					Este campo es requerido
				</span>
			)}

			{errors[name]?.type === "pattern" && (
				<span className="input__error">
					Ingresa un correo válido
				</span>
			)}
		</div>
	)
}

export default React.memo(Input)
