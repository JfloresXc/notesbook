import React from "react"
import NoteCard from "../note/NoteCard"
import Button from "../button"
import { useNotes } from "../../hooks/useNotes"
import { useUser } from "../../hooks/useUser"
import "./index.css"

function Notes({ notes = [] }) {
	const { getNotes } = useNotes()
	const { userGlobal } = useUser()
	const notesRendered = notes.map((noteKey, index) => {
		return (
			<li key={index}>
				<NoteCard note={noteKey} />
			</li>
		)
	})

	const handleClickUpdateFeedback = () => {
		getNotes()
	}

	return (
		<div className="notes">
			{!userGlobal && (
				<div className="notes__button-feedback">
					<Button
						message="Actualizar feedback"
						width="auto-fit"
						design="clasic"
						handleClick={handleClickUpdateFeedback}
					/>
				</div>
			)}
			<ul className="notes__list">{notesRendered}</ul>
		</div>
	)
}

export default React.memo(Notes)
