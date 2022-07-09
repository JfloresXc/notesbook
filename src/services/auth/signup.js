import { auth } from "../../firebase"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"

export const signup = async ({ email, password }) => {
	const user = await createUserWithEmailAndPassword(auth, email, password)
	await updateProfile(user.user, {
		displayName: "user",
	})
	return { user }
}
