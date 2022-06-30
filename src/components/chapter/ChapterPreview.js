import React, { useCallback, useEffect, useRef, useState } from "react"
import { useRoute } from "wouter"
import { useChapter } from "../../hooks/useChapter"
import FormNote from "../form/FormNote"
import "./index.css"

export default function ChapterPreview({
	onSubmitForm,
	isEdit = false,
	buttonMessage = "Not Message",
}) {
	const imgRef = useRef()
	const messageImageRef = useRef()

	const [_, params] = useRoute(`/chapters/update/:idChapter`)
	const { getChapter, chapter, setChapter } = useChapter({
		id: params?.idChapter,
	})

	useEffect(() => {
		if (params?.idChapter) {
			getChapter().then((chapterKey) => {
				setChapter({ ...chapterKey })
				imgRef.current.src = chapterKey.imageUrl
			})
		}
	}, [setChapter])

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
		<div className="chapterPreview">
			<div className="chapterPreview__content-image">
				<p ref={messageImageRef}></p>
				<img
					ref={imgRef}
					alt=""
					className="chapterPreview__previewImage"
				/>
			</div>
			<div className="chapterPreview__content-form">
				<FormNote
					title={buttonMessage}
					handleSubmitFather={onSubmitForm}
					previewFile={previewFile}
					objectEdit={isEdit ? chapter : null}
				/>
			</div>
		</div>
	)
}
