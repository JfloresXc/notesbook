import React, { useCallback, useEffect, useState } from "react"
import { useRoute } from "wouter"

import Note from "../../components/note"
import Breadcrumb from "../../components/breadcrumb"
import Title from "../../components/title"
import Loader from "../../components/loading/Loader"

import { useNote } from "../../hooks/useNote"
import { useChapters } from "../../hooks/useChapters"

import "./index.css"

const ITEMS = [
	{
		title: "Todos los capítulos",
		link: "/chapters",
	},
	{
		title: "",
		link: "",
	},
	{
		title: "Nota",
		link: "/",
	},
]

export default function NotePage() {
	const [_, params] = useRoute(`/notes/note/:idNote`)
	const { getNote, note, setNote } = useNote()
	const [items, setItems] = useState(ITEMS)
	const { chapters } = useChapters()

	useEffect(() => {
		getNote({ id: params.idNote })
	}, [chapters])

	useEffect(() => {
		setItemsOwn()
	}, [note])

	const setItemsOwn = useCallback(() => {
		const chapter = chapters.find(({ id }) => {
			return id === note?.idChapter
		})

		setItems((itemsKey) => {
			const itemsOwn = itemsKey.map((itemkey, index) => {
				if (index === 1) {
					return {
						link: `/notes/${note?.idChapter}`,
						title: chapter?.title,
					}
				} else if (index === 2) {
					return {
						title: note?.title,
					}
				}

				return { ...itemkey }
			})
			return itemsOwn
		})
	}, [note])

	return (
		<div className="page notePage">
			<Loader>
				<>
					<Breadcrumb items={items} />
					<Title title={`📑 Nota: ${note.title}`} />
					<Note note={note} />
				</>
			</Loader>
		</div>
	)
}
