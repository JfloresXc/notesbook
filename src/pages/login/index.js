import React from "react"
import { Link } from "wouter"
import { FormLogin } from "../../components/form"
import "./index.css"

export default function Login() {
	return (
		<div className="page login">
			<Link
				to="/register"
				style={{
					textAlign: "center",
					color: "var(--colors-primary)",
				}}
			>
				¿No tienes una cuenta? Regístrate
			</Link>
			<FormLogin buttonMessage={"Iniciar Sesion"} submit={true} />
		</div>
	)
}
