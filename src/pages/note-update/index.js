import React from "react"
import { useRoute } from "wouter"
import { useNote } from "../../hooks/useNote"
import Title from "../../components/title"
import NotePreview from "../../components/note/NotePreview"

export default function NoteUpdate() {
	const [_, params] = useRoute(`/notes/update/:idNote`)
	const { updateNote, note } = useNote({ id: params.idNote })

	const handleSubmitFather = async (data) => {
		const { title, description, idChapter, file } = data
		const [fileImage] = file

		await updateNote({
			note: { ...note, title, description, idChapter },
			file: fileImage,
		})
	}

	return (
		<div className="page noteUpdate">
			<Title title="📏 Formulario editar nota" />
			<NotePreview
				isEdit={true}
				onSubmitForm={handleSubmitFather}
				buttonMessage="Editar nota"
			/>
		</div>
	)
}
