import { db, storage } from "../../firebase"
import { Note } from "../../models/Note"
import { doc, updateDoc } from "firebase/firestore"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"

export async function putNote({ note = new Note(), id, file }) {
	if (file) {
		const fileRef = ref(storage, `notes/${file?.name}`)
		await uploadBytes(fileRef, file)
		const imageUrl = await getDownloadURL(fileRef)
		note = {
			...note,
			imageUrl,
		}
	}

	const document = doc(db, "notes", id)
	await updateDoc(document, note)
}
