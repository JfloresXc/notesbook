import { db, storage } from "../../firebase"
import { Note } from "../../models/Note"
import { doc, collection, setDoc } from "firebase/firestore"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"

export async function postNote({ note = new Note(), file }) {
	const fileRef = ref(storage, `notes/${file?.name}`)
	await uploadBytes(fileRef, file)
	const imageUrl = await getDownloadURL(fileRef)
	note = {
		...note,
		imageUrl,
	}
	const col = collection(db, "notes")
	await setDoc(doc(col), { ...note })
}
