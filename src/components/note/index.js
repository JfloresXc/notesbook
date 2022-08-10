import React from "react"
import Image from "../image"
import "./index.css"

function Note({ note }) {
	const { imageUrl, title, description, date } = note

	const formatDate = ({ date }) => {
		let numbers = date?.split("/")
		if (!numbers[0][1]) numbers[0] = "0" + numbers[0]
		if (!numbers[1][1]) numbers[1] = "0" + numbers[1]
		return `${numbers[0]}/${numbers[1]}/${numbers[2]}`
	}

	return (
		<div className="note">
			<div className="note__body">
				<Image
					classes={"note__image"}
					source={imageUrl}
					description={description}
				/>
			</div>
			<div className="note__footer">
				<h2 className="note__title">{title}</h2>
				<h2 className="note__date">
					{formatDate({ date: date || "0/0/0" })}
				</h2>
				<p className="note__description">{description}</p>
			</div>
		</div>
	)
}

export default React.memo(Note)
