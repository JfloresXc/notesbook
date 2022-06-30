import { db } from "../../firebase"
import { getDoc, doc } from "firebase/firestore"

export const getChapter = async ({ id }) => {
	const document = doc(db, `chapters`, id)
	const response = await getDoc(document)
	return { ...response.data(), id }
}
