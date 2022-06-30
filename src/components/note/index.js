import React from "react"
import Image from "../image"
import "./index.css"

function Note({ note }) {
	const { imageUrl, title, description, date } = note

	return (
		<div className="note">
			<div className="note__body">
				<Image
					classes={"note__image"}
					source={imageUrl}
					description={description}
				/>
				<h1 className="note__title">{title}</h1>
			</div>
			<div className="note__footer">
				<h2 style={{ paddingBottom: ".2em" }}>{date}</h2>
				<p className="note__description">{description}</p>
			</div>
		</div>
	)
}

export default React.memo(Note)
