import React from "react"
import Feauter from "../feature"

import "./features.css"

export default function Features({ title, features = [] }) {
	return (
		<div className="page features">
			<p className="features__title">{title}</p>
			<ul className="features_list">
				{features.map((featureKey, index) => (
					<Feauter key={index} type="subject" {...featureKey} />
				))}
			</ul>
		</div>
	)
}
