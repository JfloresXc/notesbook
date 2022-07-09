import React from "react"
import ChapterCard from "../chapter/ChapterCard"
import Title from "../title"
import { useUser } from "../../hooks/useUser"
import "./index.css"
import Button from "../button"
import { useChapters } from "../../hooks/useChapters"

function ChaptersPublic({ userChapters = [] }) {
	const chaptersUserRendered = userChapters.map((chapterUserKey, index) => {
		const { idUser, chaptersFinally } = chapterUserKey
		return (
			<div key={index}>
				<div className="chapters" key={idUser}>
					{chaptersFinally.map((chapterKey, index) => {
						const username = idUser.slice(0, 10)
						return (
							<ChapterCard
								username={username}
								{...chapterKey}
								key={index}
							/>
						)
					})}
				</div>
				<div className="chapters__separator"></div>
			</div>
		)
	})

	return <div className="chapters-public">{chaptersUserRendered}</div>
}

export default function Chapters({ chapters = [] }) {
	const { userGlobal } = useUser()
	const { getChapters } = useChapters()

	let usersId = chapters?.map(({ idUser }) => {
		return idUser
	})

	const users = usersId.filter((userIdKey, index) => {
		return usersId.indexOf(userIdKey) === index
	})

	const userChapters = users.map((userKey) => {
		const data = chapters.filter((chapterKey) => {
			return userKey === chapterKey.idUser
		})
		return { idUser: userKey, chaptersFinally: data }
	})

	const chaptersRendered = chapters.map((chapterKey, index) => {
		return <ChapterCard desing={"float"} {...chapterKey} key={index} />
	})

	const handleClickUpdateFeedback = () => {
		getChapters()
	}
	return (
		<>
			{userGlobal && userGlobal.rol == "user" ? (
				<div className="chapters">
					<Title title="Tus capítulos" />
					{chaptersRendered}
				</div>
			) : (
				<>
					<Title
						title={`Usuarios anónimos y sus capítulos públicos `}
					/>
					<div className="chapters__button-feedback">
						<Button
							message="Actualizar feedback"
							width="auto-fit"
							design="clasic"
							handleClick={handleClickUpdateFeedback}
						/>
					</div>
					<ChaptersPublic userChapters={userChapters} />
				</>
			)}
		</>
	)
}
