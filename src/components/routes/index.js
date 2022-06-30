import React from "react"
import { Switch, Route, Redirect } from "wouter"

import Home from "../../pages/home"
import Login from "../../pages/login"
import Signup from "../../pages/signup"
import NoteAdd from "../../pages/note-add"
import NoteUpdate from "../../pages/note-update"
import NotePage from "../../pages/note"
import NotesPage from "../../pages/notes"
import ChapterAdd from "../../pages/chapter-add"
import ChapterUpdate from "../../pages/chapter-update"
import ChaptersPage from "../../pages/chapters"
import ErrorPage from "../../pages/error"
import OptionsPage from "../../pages/options"

import Alert from "../alert"

import { useUser } from "../../hooks/useUser"
import { useAlert } from "../../hooks/useAlert"

export default function Routes() {
	const { userGlobal } = useUser()
	const { alert } = useAlert()
	const { message, success, activated } = alert

	return (
		<>
			<Switch>
				<Route path="/notes/add">
					{userGlobal ? <NoteAdd /> : <Redirect to="/login" />}
				</Route>
				<Route path="/notes/update/:idNote">
					{userGlobal ? (
						<NoteUpdate />
					) : (
						<Redirect to="/login" />
					)}
				</Route>
				<Route path="/chapters/add">
					{userGlobal ? (
						<ChapterAdd />
					) : (
						<Redirect to="/login" />
					)}
				</Route>
				<Route path="/chapters/update/:idChapter">
					{userGlobal ? (
						<ChapterUpdate />
					) : (
						<Redirect to="/login" />
					)}
				</Route>
				<Route path="/options">
					{userGlobal ? (
						<OptionsPage />
					) : (
						<Redirect to="/login" />
					)}
				</Route>
				<Route path="/login">
					{!userGlobal ? <Login /> : <Redirect to="/" />}
				</Route>
				<Route path="/register">
					{!userGlobal ? <Signup /> : <Redirect to="/" />}
				</Route>
				<Route path="/notes/note/:idNote" component={NotePage} />
				<Route path="/notes/:idChapter" component={NotesPage} />
				<Route path="/chapters" component={ChaptersPage} />
				<Route path="/" component={Home} />
				<Route path="/:rest*" component={ErrorPage} />
			</Switch>
			{activated && (
				<Alert
					message={message}
					design={success ? "success" : "danger"}
				/>
			)}
		</>
	)
}
