import React from "react"
import { useLocation } from "wouter"
import { useUser } from "../../hooks/useUser"
import { useChapter } from "../../hooks/useChapter"
import Menu from "../menu"
import Image from "../image"
import Button from "../button"
import "./index.css"

function ChapterCard({ title, description, imageUrl, id, hidden, desing }) {
	const { userGlobal } = useUser()
	const { deleteChapter, hideChapter } = useChapter({ id })
	const [_, setLocale] = useLocation()

	const onClickShowNote = () => {
		setLocale(`/notes/${id}`)
	}

	const handleClickUpdate = () => {
		setLocale(`/chapters/update/${id}`)
	}

	const handleClickDelete = async () => {
		await deleteChapter()
	}

	const handleClickHidden = async () => {
		await hideChapter()
	}

	return (
		<div className={`cardChapter chapter-${desing}`}>
			{userGlobal && (
				<Menu
					onClickUpdate={handleClickUpdate}
					onClickDelete={handleClickDelete}
					onClickHidden={handleClickHidden}
					hidden={hidden}
				/>
			)}
			<div className="cardChapter__body">
				<Image
					classes={"cardChapter__image"}
					source={imageUrl}
					description={description}
				/>
				<h1 className="cardChapter__title">📒 {title}</h1>
				<Button
					design="clasic"
					message=" 📖 Ver notas"
					width="fit-content"
					handleClick={() => onClickShowNote()}
				/>
				<p className="cardChapter__description">{description}</p>
			</div>
			<div className="cardChapter__body"></div>
		</div>
	)
}

export default React.memo(ChapterCard)
