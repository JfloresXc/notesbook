import React from "react"
import Features from "../../components/features"

let FEATURES = [
	{
		title: "Añadir capítulo",
		description:
			"Añade tus capítulos. Para ello serán necesarios un título, una descripción y una imagen.",
		link: "/chapters/add",
		linkMessage: "Añadir capítulo ",
	},
	{
		title: "Añadir nota",
		description:
			"Añade tus notas. Para ello serán necesarios un título, una descripción, un capítulo y una imagen.",
		link: "/notes/add",
		linkMessage: "Añadir nota ",
	},
]

export default function OptionsPage() {
	return (
		<div className="page options-page">
			<Features title={"Tus opciones"} features={FEATURES} />
		</div>
	)
}
