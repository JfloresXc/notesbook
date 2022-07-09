import React, { useState, useContext } from "react"
import { useLocation } from "wouter"
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
	const setLocation = useLocation()[1]
	const { logout } = useUser()

	const setSticked = () => {
		if (window.scrollY > 0) setSticky(true)
		else setSticky(false)
	}

	const handleLogin = () => setLocation("/login")

	window.addEventListener("scroll", setSticked)

	return (
		<nav>
			<div className={`navbar ${sticky && "sticky"}`}>
				<li className="navbar__brand-link">
					<Link to="/">📚 Notesbook</Link>
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
					{userGlobal &&
						userGlobal.displayName === "administrator" && (
							<li className="navbar__link">
								<Link to="/alert">Mensaje</Link>
							</li>
						)}
					<li className="navbar__link navbar__link-login">
						{!userGlobal ? (
							<Button
								handleClick={handleLogin}
								message="Iniciar Sesión"
								width="fit-content"
							/>
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
