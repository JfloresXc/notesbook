import React from "react"
import ChapterCard from "../chapter/ChapterCard"
import Title from "../title"
import { useUser } from "../../hooks/useUser"
import "./index.css"

function ChaptersPublic({ userChapters = [] }) {
	const chaptersUserRendered = userChapters.map((chapterUserKey, index) => {
		const { idUser, chaptersFinally } = chapterUserKey
		return (
			<div key={index}>
				<h1 className="chapters__title">{`🦹‍♂️ Usuario:  ${idUser.slice(
					0,
					10
				)}`}</h1>
				<div className="chapters" key={idUser}>
					{chaptersFinally.map((chapterKey, index) => {
						return (
							<ChapterCard
								desing={"float"}
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

	return (
		<>
			{userGlobal ? (
				<div className="chapters">
					<Title title=" 📚 Todos tus capítulos " />
					{chaptersRendered}
				</div>
			) : (
				<>
					<Title
						title={`Usuarios anónimos y sus capítulos públicos `}
					/>
					<ChaptersPublic userChapters={userChapters} />
				</>
			)}
		</>
	)
}
