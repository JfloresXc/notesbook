import React from "react"

import Title from "../../components/title"
import ChapterPreview from "../../components/chapter/ChapterPreview"

import { useChapter } from "../../hooks/useChapter"
import { useChapters } from "../../hooks/useChapters"

import "./index.css"

export default function ChapterAdd() {
	const { addChapter } = useChapter()
	const { getChapters } = useChapters()

	const handleSubmitFather = async (data) => {
		await addChapter(data)
		await getChapters()
	}

	return (
		<div className="page chapterAdd">
			<Title title="Formulario agregar capítulo" />
			<ChapterPreview
				onSubmitForm={handleSubmitFather}
				buttonMessage="Agregar capítulo"
			/>
		</div>
	)
}
