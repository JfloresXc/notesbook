import { db, storage } from "../../firebase"
import { Chapter } from "../../models/Chapter"
import { doc, updateDoc } from "firebase/firestore"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"

export const putChapter = async ({ chapter = new Chapter(), id, file }) => {
	if (file) {
		const fileRef = ref(storage, `chapters/${file?.name}`)
		await uploadBytes(fileRef, file)
		const imageUrl = await getDownloadURL(fileRef)
		chapter = {
			...chapter,
			imageUrl,
		}
	}

	const document = doc(db, `chapters`, id)
	await updateDoc(document, { ...chapter })
}
