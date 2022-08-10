import React, { useEffect } from "react"
import { useRoute } from "wouter"
import Button from "../button"
import Input from "./Input"
import Select from "./Select"
import TextArea from "./TextArea"
import InputFile from "./InputFile"
import { useChapters } from "../../hooks/useChapters"
import { useForm } from "react-hook-form"
import { useNote } from "../../hooks/useNote"
import "./index.css"
import { useChapter } from "../../hooks/useChapter"

export default function FormNote({
	title = "Not found",
	previewFile = null,
	handleSubmitFather,
	isNote = false,
	objectEdit = null,
}) {
	const { chapters } = useChapters()
	const { note } = useNote()
	const { chapter } = useChapter()
	const options = chapters?.map(({ id, title }) => {
		return { id, title }
	})
	const params = useRoute(`/notes/add/:idChapter`)[1]
	const {
		register,
		handleSubmit,
		formState: { errors },
		setValue,
	} = useForm({
		defaultValues: {
			idChapter: options,
		},
	})
	let propsForm = { register, errors, required: true }

	useEffect(() => {
		if (objectEdit) {
			const { title, description } = objectEdit
			setValue("title", title)
			setValue("description", description)

			if (objectEdit.idChapter)
				setValue("idChapter", `${objectEdit.idChapter}`.trim())
		}

		if (params?.idChapter) {
			setValue("idChapter", `${params?.idChapter}`.trim())
		}
	}, [chapter, note, objectEdit])

	const handleSubmitOwn = (data) => {
		if (data.file[0] && data.file[0].size > 1024 * 1024) return
		handleSubmitFather(data)
	}

	return (
		<form
			className="form form-dark"
			onSubmit={handleSubmit(handleSubmitOwn)}
		>
			<h1 className="form__title">{title}</h1>

			<Input
				name={"title"}
				placeholder="Ingresa un título"
				labelMessage="Un título"
				{...propsForm}
			/>
			<TextArea
				name={"description"}
				placeholder="Ingresa una descripción"
				labelMessage="Una descripción"
				{...propsForm}
			/>
			{isNote && (
				<Select
					name="idChapter"
					options={options}
					register={register}
					labelMessage="Un capítulo"
					{...propsForm}
				/>
			)}
			<InputFile
				name={"file"}
				previewFile={previewFile}
				isEdit={Boolean(objectEdit)}
				{...propsForm}
			/>
			<Button
				type="submit"
				design="primary"
				icon="➕"
				message={title}
				width="200px"
			/>
		</form>
	)
}
