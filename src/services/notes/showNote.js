import { db } from "../../firebase"
import { Note } from "../../models/Note"
import { doc, updateDoc } from "firebase/firestore"

export async function showNote({ note = new Note(), id }) {
	const { hidden } = note
	note = { ...note, hidden: !hidden }
	const document = doc(db, "notes", id)
	await updateDoc(document, note)
}
