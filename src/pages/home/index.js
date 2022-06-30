import React from "react"
import Button from "../../components/button"
import Features from "../../components/features"
import "./index.css"

let FEATURES = [
	{
		title: "Usuarios",
		description:
			"Tú, yo, todos podemos ser usuarios. Regístrate tan solo con un correo y una contraseña. Ante el público serás un anónimo.",
		link: "/register",
		linkMessage: "Registrarse",
	},
	{
		title: "Capítulos",
		description:
			"Tus capítulos son privados, pero ¿qué si quieres que los demás los vean?, ponlos a públicos y preparados. ",
		link: "/chapters",
		linkMessage: "Ver capítulos",
	},
	{
		title: "Notas",
		description:
			"Tus notas serán las más descriptivas, privadas o públicas, son tuyas y nada más que tuyas. Exprésate como desees crack.",
		link: "/chapters",
		linkMessage: "Ver notas",
	},
	{
		title: "Historia",
		description:
			"Historia será tu pase a visualizar si son tus notas o la de los demás. Siempre estarán presentes.",
		link: "/chapters",
		linkMessage: "Ver historia",
	},
	{
		title: "Desarrollador",
		description:
			"Soy Jose Flores Chamba. Amigo si deseas algún tipo de info, solo mira mi portafolio. ",
		link: "https://jfloresxc.github.io/",
		linkMessage: "Ver portafolio",
		linkExternal: true,
	},
]

export default function Home() {
	const handleAuthorPage = () => {
		window.open("https://jfloresxc.github.io/", "_blank")
	}

	return (
		<div className=" home">
			<div className="home__header">
				<h1 className="home__title">
					Mmmmmmm ¿Tan solo una escuálida app de notitas? 🤷‍♂️
				</h1>
				<div className="home__description">
					<p className="home__description-content">
						Hola. En esta app podrás escribir tus propios
						capítulos, y estos a la vez conteniendo tus notas
						las cuales podrían ser públicas o privadas.
						¿Quizás una agenda personal? ¿Quizás algún mensaje
						para alguna persona en especial? Es tu decisión
						elegir cómo utilizarlos, gustos que gustan.
					</p>
					<div
						className="home__button"
						onClick={handleAuthorPage}
					>
						<Button
							message="Desarrollador "
							design="line-light"
							width="fit-content"
						/>
					</div>
				</div>
			</div>
			<div className="home__body page">
				<Features
					features={FEATURES}
					title={"Nuestras características"}
				/>
			</div>
		</div>
	)
}
