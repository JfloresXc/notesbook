import React from "react"
import ReactDOM from "react-dom"
import "./index.css"

function Alert({ message, design }) {
	return (
		<div className={`alert alert-${design}`}>
			<p className="alert__message">{message}</p>
		</div>
	)
}

export default function AlertPortal({ message, design }) {
	return ReactDOM.createPortal(
		<Alert message={message} design={design} />,
		document.getElementById("root")
	)
}
