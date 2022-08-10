import React, { useCallback } from "react"

import { useUser } from "../../hooks/useUser"
import { useChapter } from "../../hooks/useChapter"

import ChapterCard from "../chapter/ChapterCard"
import Title from "../title"

import "./index.css"
import { useChapters } from "../../hooks/useChapters"

export default function Chapters({}) {
	const { userGlobal } = useUser()
	const { deleteChapter, hideChapter } = useChapter()
	const { getChapters, chapters } = useChapters()

	const handleClickHidden = useCallback(
		async (id) => {
			await hideChapter(id)
			getChapters()
		},
		[hideChapter]
	)

	const handleClickDelete = useCallback(
		async (id) => {
			await deleteChapter(id)
			getChapters()
		},
		[deleteChapter]
	)

	const renderedChapters = chapters.map((chapterKey, index) => {
		const { idUser, title, description, imageUrl, id, hidden, date } =
			chapterKey
		const username = idUser.slice(0, 10)
		return (
			<ChapterCard
				title={title}
				username={!userGlobal ? username : ""}
				description={`${description}`.slice(0, 30) + "..."}
				imageUrl={imageUrl}
				id={id}
				hidden={hidden}
				date={date}
				key={index}
				handleClickDelete={handleClickDelete}
				handleClickHidden={handleClickHidden}
			/>
		)
	})

	return (
		<>
			<Title
				title={
					!userGlobal
						? "Usuarios anónimos y sus capítulos públicos"
						: "Tus capítulos"
				}
			/>
			<div className="chapters">{renderedChapters}</div>
		</>
	)
}
