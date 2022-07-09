import React from "react"
import Button from "../button"
import Input from "./Input"

import { useUser } from "../../hooks/useUser"
import { useForm } from "react-hook-form"
import { useAlert } from "../../hooks/useAlert"

import { expressions } from "../../services/utils"

export function FormLogin({ buttonMessage, isRegister = false }) {
	const { login, signup } = useUser()
	const { setAlertTime } = useAlert()
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm()
	const propsForm = { register, errors, required: true }

	const handleSubmitOwn = async (data) => {
		const { email, password } = data

		if (isRegister)
			await processSignup({
				email,
				password,
				confirmPassword: data?.confirmPassword,
			})
		else await login({ email, password })
	}

	const processSignup = async ({ email, password, confirmPassword }) => {
		if (confirmPassword === password) {
			await signup({ email, password })
		} else {
			setAlertTime({
				message: "❌ Contraseñas no iguales ❌",
				success: false,
			})
		}
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
				<Input
					type="password"
					name={"password"}
					placeholder="Ingresa tu contraseña"
					labelMessage="Tu contraseña"
					{...propsForm}
				/>
				{isRegister && (
					<Input
						type="password"
						name={"confirmPassword"}
						placeholder="Ingresa de nuevo la contraseña"
						labelMessage="Confirmar contraseña"
						{...propsForm}
					/>
				)}
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
