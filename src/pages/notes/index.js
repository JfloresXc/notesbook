import React, { useState, useEffect } from "react"
import Notes from "../../components/notes"
import Title from "../../components/title"
import Loader from "../../components/loading/Loader"
import Breadcrumb from "../../components/breadcrumb"

import { useRoute } from "wouter"
import { useNotes } from "../../hooks/useNotes"
import { useChapters } from "../../hooks/useChapters"

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
	let { notes } = useNotes()
	let { chapters } = useChapters()
	const [_, params] = useRoute(`/notes/:idChapter`)

	const [notesOwn, setNotesOwn] = useState([])
	const chapter = chapters.find(({ id }) => id === params.idChapter)
	ITEMS[1] = { link: `/notes/${chapter?.id}`, title: chapter?.title }

	useEffect(() => {
		let notesArray = notes.filter(({ idChapter }) => {
			return `${idChapter}`.trim() === params.idChapter.trim()
		})
		setNotesOwn(notesArray)
	}, [setNotesOwn, notes])

	return (
		<div className="page notesPage">
			<Loader>
				<>
					<Breadcrumb items={ITEMS} />
					<Title title={`${chapter?.title}`} />
					<Notes notes={notesOwn}></Notes>
				</>
			</Loader>
		</div>
	)
}
