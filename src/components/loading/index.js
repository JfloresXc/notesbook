import React from "react"
import "./index.css"

export default function Loading({ complete = false }) {
	return (
		<div className={`loading ${complete && "loading-complete"}`}>
			<div className={`loader`}></div>
		</div>
	)
}
