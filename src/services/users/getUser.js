import { db } from "../../firebase"
import { doc, getDoc } from "firebase/firestore"

export async function getUser({ id }) {
	const document = doc(db, "users", id)
	const response = await getDoc(document)
	return { ...response.data(), id }
}
