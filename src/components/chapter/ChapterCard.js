import React from "react"
import { useLocation } from "wouter"
import { useUser } from "../../hooks/useUser"
import { useChapter } from "../../hooks/useChapter"
import Menu from "../menu"
import Image from "../image"
import "./index.css"
import { Chapter } from "../../models/Chapter"
import { useNote } from "../../hooks/useNote"
import { Note } from "../../models/Note"

function ChapterCard({
	title,
	description,
	imageUrl,
	id,
	hidden,
	date,
	username = "tú",
}) {
	const { userGlobal } = useUser()
	const { deleteChapter, hideChapter } = useChapter({ id })
	const { setNote } = useNote()
	const [_, setLocale] = useLocation()

	const handleClickShowNote = () => {
		setLocale(`/notes/${id}`)
	}

	const handleClickUpdate = () => {
		setLocale(`/chapters/update/${id}`)
	}

	const handleClickDelete = async () => {
		await deleteChapter()
	}

	const handleClickHidden = async () => {
		await hideChapter()
	}

	const handleClickAdd = async () => {
		setNote({ ...new Note(), idChapter: id })
		setLocale(`/notes/add`)
	}

	return (
		<div className={`chapter-card`}>
			{userGlobal && (
				<Menu
					onClickUpdate={handleClickUpdate}
					onClickDelete={handleClickDelete}
					onClickHidden={handleClickHidden}
					onClickAdd={handleClickAdd}
					hidden={hidden}
					isChapter={true}
				/>
			)}
			<div
				className="chapter-card__body"
				onClick={handleClickShowNote}
			>
				<Image
					classes={"chapter-card__image"}
					source={imageUrl}
					description={description}
				/>
				<h1 className="chapter-card__title">{title}</h1>
				<p className="chapter-card__description">{description}</p>
			</div>
			<div className="chapter-card__footer">
				<p className="chapter-card__username">
					<i className="fa-solid fa-user-secret"></i>
					{" " + username}
				</p>
				<p className="chapter-card__date">{date}</p>
			</div>
		</div>
	)
}

export default React.memo(ChapterCard)
