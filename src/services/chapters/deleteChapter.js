import { deleteDoc, doc } from "firebase/firestore"
import { db } from "../../firebase"

export const deleteChapter = async ({ idChapter }) => {
	const document = doc(db, "chapters", idChapter)
	await deleteDoc(document)
}
