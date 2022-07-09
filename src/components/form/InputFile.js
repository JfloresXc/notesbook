import React, { useState, useEffect } from "react"

function InputFile({
	name,
	register,
	previewFile,
	errors,
	required,
	isEdit = false,
}) {
	const [validationLimitFile, setValidationLimitFile] = useState({
		limit: true,
	})
	const { limit } = validationLimitFile
	const validationError = errors[name]?.type === "required"

	const handleChange = (e) => {
		const { files } = e.target
		const file = files[0]
		if (file) delete errors.file

		setValidationLimitFile({
			limit: file?.size > 1024 * 1024 ? false : true,
		})
		previewFile(file)
	}

	return (
		<div className="form__group">
			<label className="inputFile__label" htmlFor="file">
				Seleccionar una imagen
			</label>

			{(validationError && (
				<span className="input__error">
					Una imagen es requerida
				</span>
			)) ||
				(!limit && (
					<span className="input__error">
						El límite máximo debe ser 1024KB
					</span>
				))}
			<input
				id="file"
				type="file"
				className="inputFile"
				{...register("file", !isEdit && { required })}
				onChange={handleChange}
			/>
		</div>
	)
}

export default React.memo(InputFile)
