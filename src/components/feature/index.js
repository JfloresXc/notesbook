import React from "react"
import { Link } from "wouter"
import Icon from "../icon"

import "./feature.css"

export default function Feauter({
	type,
	title = "Not title",
	description = "Not Description",
	link = "/",
	linkMessage,
	linkExternal = false,
}) {
	return (
		<div className="feature">
			<Icon type={type} />
			<div className="feature__info">
				<p className="feature__title">{title}</p>
				<p className="feature__description">{description}</p>
			</div>
			{!linkExternal ? (
				<Link to={link} className="feature__button">
					{linkMessage || "Explorar"}
				</Link>
			) : (
				<a href={link} target="_blank" className="feature__button">
					{linkMessage || "Explorar"}
				</a>
			)}
		</div>
	)
}
