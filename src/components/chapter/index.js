import React from "react"
import { Chapter } from "../../models/Chapter"
import "./index.css"

export default function Chapter({ chapter = new Chapter() }) {
	return (
		<div className="chapter">
			<div className="chapter__body">
				<img
					className="chapter__image"
					src={chapter.imageUrl}
					alt={chapter.title}
					loading="lazy"
				/>
				<h1 className="chapter__title">{chapter.title}</h1>
			</div>
			<div className="chapter__footer">
				<p className="chapter__description">
					{chapter.description}
				</p>
			</div>
		</div>
	)
}
