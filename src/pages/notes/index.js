import React, { useState, useEffect } from "react"
import { useRoute } from "wouter"

import { useNotes } from "../../hooks/useNotes"
import { useChapters } from "../../hooks/useChapters"

import Notes from "../../components/notes"
import Loading from "../../components/loading"
import Breadcrumb from "../../components/breadcrumb"
import Button from "../../components/button"

import "./index.css"
import ChapterCard from "../../components/chapter/ChapterCard"
import { Chapter } from "../../models/Chapter"

const ITEMS = [
	{
		title: "Todos los capítulos",
		link: "/chapters",
	},
	{
		title: "",
	},
]

export default function NotesPage() {
	let { notes, getNotes, isLoading } = useNotes()
	let { chapters } = useChapters()
	const [_, params] = useRoute(`/notes/:idChapter`)
	const [notesOwn, setNotesOwn] = useState([])

	const chapter =
		chapters.find(({ id }) => id === params.idChapter) || new Chapter()
	const { title, description, imageUrl, id, hidden, date } = chapter

	ITEMS[1] = { link: `/notes/${chapter?.id}`, title: title }

	useEffect(() => {
		let notesArray = notes.filter(({ idChapter }) => {
			return `${idChapter}`.trim() === params.idChapter.trim()
		})
		setNotesOwn(notesArray)
	}, [setNotesOwn, notes])

	const handleClickUpdateFeedback = () => {
		getNotes()
	}

	return (
		<div className="page notesPage">
			{isLoading ? (
				<Loading complete={true} />
			) : (
				<div className="notesPage__content">
					<div className="notesPage__content-1">
						<ChapterCard
							title={title}
							username={""}
							description={description}
							imageUrl={imageUrl}
							id={id}
							hidden={hidden}
							date={date}
							isChapterButton={true}
						/>
					</div>
					<div className="notesPage__content-2">
						{/* <div className="chapters__button-feedback">
							<Button
								message="Actualizar feedback"
								width="auto-fit"
								design="clasic"
								handleClick={handleClickUpdateFeedback}
							/>
						</div> */}
						<Breadcrumb items={ITEMS} />
						<Notes notes={notesOwn}></Notes>
					</div>
				</div>
			)}
		</div>
	)
}
