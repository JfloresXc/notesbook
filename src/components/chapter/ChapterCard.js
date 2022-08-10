import React, { useCallback } from "react"
import { useLocation } from "wouter"

import { useUser } from "../../hooks/useUser"
import { useChapter } from "../../hooks/useChapter"

import Menu from "../menu"
import Image from "../image"

import "./index.css"

function ChapterCard({
	title,
	description,
	imageUrl,
	id,
	hidden,
	date,
	username = "tú",
	isChapterButton = true,
	handleClickDelete,
	handleClickHidden,
}) {
	const { userGlobal } = useUser()
	const [_, setLocale] = useLocation()

	const handleClickShowNote = useCallback(() => {
		setLocale(`/notes/${id}`)
	}, [setLocale])

	const handleClickUpdate = useCallback(() => {
		setLocale(`/chapters/update/${id}`)
	}, [id])

	const handleClickAdd = useCallback(async () => {
		setLocale(`/notes/add/${id}`)
	}, [setLocale])

	const formatDate = ({ date }) => {
		let numbers = date?.split("/")
		if (!numbers[0][1]) numbers[0] = "0" + numbers[0]
		if (!numbers[1][1]) numbers[1] = "0" + numbers[1]
		return `${numbers[0]}/${numbers[1]}/${numbers[2]}`
	}

	return (
		<div
			className={`chapter-card ${
				!isChapterButton && "chapter-card-hover"
			}`}
		>
			{userGlobal && (
				<Menu
					onClickUpdate={handleClickUpdate}
					onClickDelete={() => handleClickDelete(id)}
					onClickHidden={() => handleClickHidden(id)}
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
				<p className="chapter-card__date">
					{formatDate({ date: date || "0/0/0" })}
				</p>
			</div>
		</div>
	)
}

export default React.memo(ChapterCard)
