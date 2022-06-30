import { db, storage } from "../../firebase"
import { doc, collection, setDoc } from "firebase/firestore"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"

export async function postChapter({ chapter, file }) {
	const fileRef = ref(storage, `chapters/${file?.name}`)
	await uploadBytes(fileRef, file)
	const imageUrl = await getDownloadURL(fileRef)
	chapter = {
		...chapter,
		imageUrl,
	}
	const col = collection(db, "chapters")
	await setDoc(doc(col), chapter)
}
