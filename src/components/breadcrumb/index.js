import React from "react"
import { Link } from "wouter"
import "./index.css"

export default function Breadcrumb({ items = [] }) {
	const setItems = () => {
		let itemsOwn = []
		items.forEach((itemKey, index) => {
			itemsOwn.push({ ...itemKey })
			if (index !== items.length - 1) itemsOwn.push({ title: "/" })
		})
		return itemsOwn
	}

	const itemsRendered = setItems().map(({ title, link }, index) => {
		if (!link || index === setItems().length - 1)
			return (
				<li className="breadcrumb__item" key={index}>
					{title}
				</li>
			)
		return (
			<li
				className="breadcrumb__item breadcrumb__item-actived"
				key={index}
			>
				<Link to={link}>{title}</Link>
			</li>
		)
	})

	return <ul className="breadcrumb">{itemsRendered}</ul>
}
