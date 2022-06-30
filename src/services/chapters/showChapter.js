import { db } from "../../firebase"
import { Chapter } from "../../models/Chapter"
import { doc, updateDoc } from "firebase/firestore"

export async function showChapter({ chapter = new Chapter(), id }) {
	const { hidden } = chapter
	chapter = { ...chapter, hidden: !hidden }
	const document = doc(db, "chapters", id)
	await updateDoc(document, chapter)
}
