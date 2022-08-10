import React from "react"
import { useLocation } from "wouter"
import Chapters from "../../components/chapters"
import Loading from "../../components/loading"
import Button from "../../components/button"

import { useChapters } from "../../hooks/useChapters"

function ChaptersPage() {
	const { chapters, isLoading, getChapters } = useChapters()
	const setLocation = useLocation()[1]
	const locationAdd = () => {
		setLocation("/chapters/add")
	}

	return (
		<div className="page chapterPage">
			{isLoading ? (
				<Loading complete={true} />
			) : chapters?.length === 0 ? (
				<div className="chapters__button-feedback">
					<Button
						message="Agregar capítulos"
						width="auto-fit"
						design="clasic"
						handleClick={locationAdd}
					/>
				</div>
			) : (
				<>
					<Chapters chapters={chapters} />
				</>
			)}
		</div>
	)
}

export default React.memo(ChaptersPage)
