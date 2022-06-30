import { db } from "../../firebase"
import { doc, setDoc } from "firebase/firestore"

export async function postUser({ user, idUser }) {
	const document = doc(db, `users/${idUser}`)
	await setDoc(document, { ...user })
}
