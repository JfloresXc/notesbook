import React from "react"
import Input from "./Input"
import Button from "../button"
import { useAlert } from "../../hooks/useAlert"
import { useForm } from "react-hook-form"

export default function FormAlert({ buttonMessage }) {
	const { updateAlert } = useAlert()
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm()
	const propsForm = { register, errors, required: true }

	const handleSubmitOwn = async (data) => {
		const { message } = data
		await updateAlert({ message })

		reset()
	}

	return (
		<form className="form" onSubmit={handleSubmit(handleSubmitOwn)}>
			<h1 className="form__title">{buttonMessage}</h1>
			<Input
				name={"message"}
				placeholder="Ingresa un mensaje"
				labelMessage="Tu mensaje"
				{...propsForm}
			/>
			<Button
				type="submit"
				design="primary"
				icon="🌻"
				message={buttonMessage}
			/>
		</form>
	)
}
