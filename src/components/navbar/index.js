import React, { useState, useContext } from "react"
import { Context } from "../../context/UserContext"
import { useToggle } from "../../hooks/useToggle"
import { Link } from "wouter"
import "./index.css"
import Button from "../button"
import { useUser } from "../../hooks/useUser"

export default function Navbar() {
	const [sticky, setSticky] = useState(false)
	const [burger, toggleBurger] = useToggle(false)
	const { userGlobal } = useContext(Context)
	const { logout } = useUser()

	const setSticked = () => {
		if (window.scrollY > 0) setSticky(true)
		else setSticky(false)
	}

	window.addEventListener("scroll", setSticked)

	return (
		<nav>
			<div className={`navbar ${sticky && "sticky"}`}>
				<li className="navbar__brand-link">
					<Link to="/">Notas 📚</Link>
				</li>
				<ul
					className={`navbar__links ${
						burger && "navbar__links-show"
					}`}
				>
					<li className="navbar__link">
						{userGlobal ? (
							<Link to="/options">Opciones</Link>
						) : (
							<Link to="/">Inicio</Link>
						)}
					</li>
					<li className="navbar__link">
						<Link to="/chapters">Historia</Link>
					</li>
					<li className="navbar__link navbar__link-login">
						{!userGlobal ? (
							<Link to="/login">Iniciar Sesión</Link>
						) : (
							<Button
								handleClick={logout}
								message="Cerrar Sesión"
								width="fit-content"
							/>
						)}
					</li>
				</ul>
				<button
					type="button"
					onClick={toggleBurger}
					className={`navbar__menu ${
						burger && "navbar__menu-open"
					}`}
				>
					<span className="navbar__menu-line navbar__menu-line-1"></span>
					<span className="navbar__menu-line navbar__menu-line-2"></span>
					<span className="navbar__menu-line navbar__menu-line-3"></span>
				</button>
			</div>
		</nav>
	)
}
