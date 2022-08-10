import React, { useEffect } from "react"
import { useLocation } from "wouter"
import { Note } from "../../models/Note"
import Image from "../image"
import Menu from "../menu"
import { useNote } from "../../hooks/useNote"
import { useUser } from "../../hooks/useUser"
import "./index.css"

function NoteCard({ id, title, imageUrl, hidden, isButton = true }) {
	const [_, setLocation] = useLocation()
	const { userGlobal } = useUser()
	const { deleteNote, hideNote } = useNote({ id })

	const localizeRoute = ({ id }) => {
		setLocation(`/notes/note/${id}`)
	}

	const handleClickUpdate = () => {
		setLocation(`/notes/update/${id}`)
	}

	const handleClickDelete = async () => {
		await deleteNote()
	}

	const handleClickHidden = async () => {
		await hideNote()
	}

	return (
		<div className={`note-card ${!isButton && "note-card-hover"}`}>
			{userGlobal && (
				<Menu
					onClickUpdate={handleClickUpdate}
					onClickDelete={handleClickDelete}
					onClickHidden={handleClickHidden}
					hidden={hidden}
				/>
			)}
			<button
				className="note-card__button"
				onClick={() => localizeRoute({ id })}
			>
				<div className="note-card__header">
					<Image
						source={imageUrl}
						description={title}
						classes={"note-card__image"}
					/>
				</div>
				<div className="note-card__hover">
					<h2 className="note-card__title">{title}</h2>
				</div>
			</button>
		</div>
	)
}

export default React.memo(NoteCard)
