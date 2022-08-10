import "./App.css"

import PageGlobal from "./pages/page-global"

import UserContext from "./context/UserContext"
import GlobalContext from "./context/GlobalContext"
import NotesContext from "./context/NotesContext"
import SingleContext from "./context/SingleContext"
import AlertContext from "./context/AlertContext"

function App() {
	return (
		<div className="app">
			<AlertContext>
				<UserContext>
					<GlobalContext>
						<NotesContext>
							<SingleContext>
								<PageGlobal />
							</SingleContext>
						</NotesContext>
					</GlobalContext>
				</UserContext>
			</AlertContext>
		</div>
	)
}

export default App
