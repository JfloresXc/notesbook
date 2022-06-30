import { deleteDoc, doc } from "firebase/firestore"
import { db } from "../../firebase"

export const deleteUser = async ({ idUser }) => {
	const document = doc(db, "users", idUser)
	await deleteDoc(document)
}
