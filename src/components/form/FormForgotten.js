import React from "react"
import Input from "./Input"
import Button from "../button"
import { useUser } from "../../hooks/useUser"
import { useForm } from "react-hook-form"

import { expressions } from "../../services/utils"

export default function FormForgotten({ buttonMessage, isSubmit }) {
	const { forgottenPassword } = useUser()
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm()
	const propsForm = { register, errors, required: true }

	const handleSubmitOwn = async (data) => {
		const { email } = data
		await forgottenPassword({ email })
		reset()
	}

	return (
		<>
			<form className="form" onSubmit={handleSubmit(handleSubmitOwn)}>
				<h1 className="form__title">{buttonMessage}</h1>
				<Input
					name={"email"}
					placeholder="Ingresa tu correo"
					labelMessage="Tu correo"
					pattern={expressions.email}
					{...propsForm}
				/>
				<Button
					type="submit"
					design="primary"
					icon="🌻"
					message={buttonMessage}
				/>
			</form>
		</>
	)
}
