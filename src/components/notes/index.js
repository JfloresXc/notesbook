import React, { useEffect } from "react"
import NoteCard from "../note/NoteCard"
import "./index.css"

function Notes({ notes = [] }) {
	const notesRendered = notes.map((noteKey, index) => {
		return (
			<li key={index}>
				<NoteCard note={noteKey} />
			</li>
		)
	})

	return (
		<div className="notes">
			<ul className="notes__list">{notesRendered}</ul>
		</div>
	)
}

export default React.memo(Notes)
