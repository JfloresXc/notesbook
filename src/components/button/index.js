import React from "react"
import "./index.css"

export default function Button({
	design = "",
	width = "200px",
	type = "text",
	message = "Not message",
	icon = "",
	handleClick = null,
}) {
	return (
		<button
			className={`button button-${design}`}
			type={type}
			onClick={handleClick}
			style={{ width }}
		>
			{icon ? <i className="button__icon">{icon}</i> : ""}
			<span className="button__message">{message}</span>
		</button>
	)
}
