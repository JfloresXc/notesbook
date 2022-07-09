import { db } from "../../firebase"
import { doc, updateDoc } from "firebase/firestore"

export const putAlert = async ({
	message = "",
	id = "FTG37s3OBYJoEXgpFgsd",
}) => {
	const document = doc(db, `alerts`, id)
	await updateDoc(document, { message })
}
