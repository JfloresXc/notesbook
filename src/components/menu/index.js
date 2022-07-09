import React from "react"
import Button from "../button"
import "./index.css"

export default function Menu({
	onClickUpdate,
	onClickDelete,
	onClickHidden,
	onClickAdd,
	hidden,
	isChapter = false,
}) {
	return (
		<div className="menu">
			<div className="menu__icon">
				<Button design="icon" message={``}>
					<i className="fa-solid fa-ellipsis-vertical"></i>
				</Button>
				<ul className="menu__content">
					<li className="menu__content-item menu__content-item-update">
						<Button
							design="icon"
							message="📏 Editar"
							handleClick={onClickUpdate}
						/>
					</li>
					<li className="menu__content-item menu__content-item-delete">
						<Button
							design="icon"
							message="❌ Eliminar"
							handleClick={onClickDelete}
						/>
					</li>
					{isChapter && (
						<li className="menu__content-item menu__content-item-add">
							<Button
								design="icon"
								message="➕ Agregar"
								handleClick={onClickAdd}
							/>
						</li>
					)}
					<li className="menu__content-item menu__content-item-hidden">
						<Button
							design="icon"
							message={
								!hidden ? "🔑 Privado" : "👨‍💻 Público"
							}
							handleClick={onClickHidden}
						/>
					</li>
				</ul>
			</div>
		</div>
	)
}
