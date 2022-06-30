import React from "react"
import { LazyLoadImage } from "react-lazy-load-image-component"
import "react-lazy-load-image-component/src/effects/blur.css"
import "./index.css"

export default function Image({ classes, source, description }) {
	return (
		<LazyLoadImage
			src={source}
			alt={description}
			className={classes}
			effect="blur"
		></LazyLoadImage>
	)
}
