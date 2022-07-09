import React from "react"
import Feauter from "../feature"
import Title from "../title"

import "./features.css"

export default function Features({ title, features = [] }) {
	return (
		<div className="features">
			<Title title={title} />
			<ul className="features_list">
				{features.map((featureKey, index) => (
					<Feauter key={index} type="subject" {...featureKey} />
				))}
			</ul>
		</div>
	)
}
