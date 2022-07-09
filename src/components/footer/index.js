import React from "react"
import "./index.css"

export default function Footer() {
	return (
		<div className="footer">
			<h1 className="footer__title">📚 Notesbook</h1>
			<div className="footer__body">
				<p className="footer__description">
					Es una aplicación que administra tus capítulos y notas.
					Aquí podrás ser un usuario anónimo que demuestra su
					contenido a todo mundo. A la vez podrás tener tu
					privacidad, puesto que nos importa mucho. Gustos que
					gustan.
				</p>
				<div className="footer__contact">
					<p className="footer__author">
						<i class="fa-solid fa-user-tie"></i> Jose Flores
						Chamba
					</p>
					<p className="footer__email">
						<i class="fa-solid fa-envelope"></i>{" "}
						jfloresxc@gmail.com
					</p>
				</div>
			</div>
		</div>
	)
}
