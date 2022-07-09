import { db } from "../../firebase"
import { getDocs, collection, query } from "firebase/firestore"

export const getChapters = async ({ consultation }) => {
	const col = collection(db, `chapters`)
	const querySnapshot = query(col, consultation)
	const response = await getDocs(querySnapshot)
	const data = []
	response.forEach((doc) => {
		data.push({ id: doc.id, ...doc.data() })
	})
	return data
}
