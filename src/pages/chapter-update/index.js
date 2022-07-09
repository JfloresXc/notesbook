import React from "react"
import { useRoute } from "wouter"
import { useChapter } from "../../hooks/useChapter"
import Title from "../../components/title"
import ChapterPreview from "../../components/chapter/ChapterPreview"

export default function ChapterUpdate() {
	const params = useRoute(`/chapters/update/:idChapter`)[1]
	const { updateChapter, chapter } = useChapter({ id: params.idChapter })

	const handleSubmitFather = async (data) => {
		const { title, description, file } = data
		const [fileImage] = file

		await updateChapter({
			chapter: { ...chapter, title, description },
			file: fileImage,
		})
	}

	return (
		<div className="page chapterUpdate">
			<Title title="Formulario editar capítulo" />
			<ChapterPreview
				isEdit={true}
				onSubmitForm={handleSubmitFather}
				buttonMessage="Editar capítulo"
			/>
		</div>
	)
}
