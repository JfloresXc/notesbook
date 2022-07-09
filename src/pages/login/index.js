import React from "react"
import { Link } from "wouter"
import { FormLogin } from "../../components/form"
import "./index.css"

export default function Login() {
	return (
		<div className="page login">
			<Link to="/register" className="login__link-register">
				¿No tienes una cuenta? Regístrate
			</Link>
			<FormLogin buttonMessage={"Iniciar Sesión"} submit={true} />
			<Link to="/forgotten" className="login__link-password">
				¿Olvidaste tu contraseña?
			</Link>
		</div>
	)
}
