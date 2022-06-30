import "./App.css"

import PageGlobal from "./pages/page-global"

import UserContext from "./context/UserContext"
import GlobalContext from "./context/GlobalContext"
import AlertContext from "./context/AlertContext"

function App() {
	return (
		<div className="app">
			<AlertContext>
				<UserContext>
					<GlobalContext>
						<PageGlobal />
					</GlobalContext>
				</UserContext>
			</AlertContext>
		</div>
	)
}

export default App
