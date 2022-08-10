import React from "react"
import NoteCard from "../note/NoteCard"
import "./index.css"

function Notes({ notes = [] }) {
	const notesRendered = notes.map((noteKey, index) => {
		const { id, title, imageUrl, hidden } = noteKey
		return (
			<li key={index}>
				<NoteCard
					id={id}
					title={title}
					imageUrl={imageUrl}
					hidden={hidden}
				/>
			</li>
		)
	})

	return (
		<div className="notes">
			<ul className="notes__list">{notesRendered}</ul>
		</div>
	)
}

export default Notes
