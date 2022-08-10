import React from "react"
import { useNote } from "../../hooks/useNote"
import NotePreview from "../../components/note/NotePreview"
import Title from "../../components/title"
import "./index.css"

export default function NotesAdd() {
	const { addNote } = useNote()

	const handleSubmitFather = async (data) => {
		await addNote(data)
	}

	return (
		<div className="noteAdd page">
			<Title title="Formulario agregar nota" />
			<NotePreview
				onSubmitForm={handleSubmitFather}
				buttonMessage="Agregar nota"
			/>
		</div>
	)
}
