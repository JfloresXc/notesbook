import React from "react"
import "./index.css"

export default function Title({ title = "Not title" }) {
	return <h1 className="title">{title}</h1>
}
