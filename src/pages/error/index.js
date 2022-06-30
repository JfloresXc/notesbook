import React from "react"
import "./index.css"

export default function ErrorPage() {
	return (
		<div className="page errorPage">
			<h1 className="errorPage__title">¡ Vaya !</h1>
			<p className="errorPage__description">
				No hemos podido encontrar la página que buscas, pipipi
				amiguito
			</p>
			<img
				className="errorPage__image"
				src="404.svg"
				alt="Error 404"
			/>
		</div>
	)
}
