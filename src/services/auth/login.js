import { auth } from "../../firebase"
import { signInWithEmailAndPassword } from "firebase/auth"

export const login = async ({ email, password }) => {
	const user = await signInWithEmailAndPassword(auth, email, password)
	return { user }
}
