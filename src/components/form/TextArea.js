import React from "react"

export default function TextArea({
	labelMessage = "Not label message",
	name,
	placeholder,
	register,
	errors,
	required = false,
	pattern = "",
}) {
	return (
		<div className="form__group">
			<label className="label" htmlFor={name}>
				{labelMessage}
			</label>
			<textarea
				rows="5"
				className="textarea"
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
