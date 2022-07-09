import React, { useCallback, useEffect, useRef } from "react"
import { useRoute } from "wouter"
import { useNote } from "../../hooks/useNote"
import { useNotes } from "../../hooks/useNotes"
import FormNote from "../form/FormNote"
import "./index.css"

export default function NotePreview({
	onSubmitForm,
	isEdit = false,
	isAddChapter = false,
	buttonMessage = "Not Message",
}) {
	const imgRef = useRef()
	const messageImageRef = useRef()

	const [_, params] = useRoute(`/notes/update/:idNote`)
	const { getNote, note } = useNote()
	const { notes } = useNotes()

	useEffect(() => {
		if (params?.idNote) {
			getNote({ id: params?.idNote })
		}
	}, [notes])

	useEffect(() => {
		imgRef.current.src = note.imageUrl
	}, [note])

	const previewFile = useCallback((file) => {
		let reader = new FileReader()

		reader.onload = () => (imgRef.current.src = reader.result)

		if (file) {
			reader.readAsDataURL(file)
			messageImageRef.current.innerHTML =
				"Size: " + Math.round(file.size / 1024) + "KB"
		} else setMessageError()
	}, [])

	const setMessageError = () => {
		imgRef.current.src = ""
		messageImageRef.current.innerHTML = "Imagen no encontrada"
	}

	return (
		<div className="notePreview">
			<div className="notePreview__content-form">
				<FormNote
					title={buttonMessage}
					handleSubmitFather={onSubmitForm}
					previewFile={previewFile}
					objectEdit={isEdit ? note : null}
					objectAdd={isAddChapter ? note : null}
					isNote={true}
				/>
			</div>
			<div className="notePreview__content-image">
				<p ref={messageImageRef}></p>
				<img
					ref={imgRef}
					alt=""
					className="notePreview__previewImage"
				/>
			</div>
		</div>
	)
}
