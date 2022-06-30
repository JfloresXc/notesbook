import React from "react"
import Chapters from "../../components/chapters"
import Loading from "../../components/loading"

import { useChapters } from "../../hooks/useChapters"
import { useLoading } from "../../hooks/useLoading"

function ChaptersPage() {
	const { chapters } = useChapters()
	const { loading } = useLoading()

	return (
		<div className="page chapterPage">
			{loading ? (
				<Loading />
			) : (
				<>
					<Chapters chapters={chapters} />
				</>
			)}
		</div>
	)
}

export default React.memo(ChaptersPage)
