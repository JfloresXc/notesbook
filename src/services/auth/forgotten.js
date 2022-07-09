import { auth } from "../../firebase"
import { sendPasswordResetEmail } from "firebase/auth"

export const forgottenPassword = async ({ email }) => {
	await sendPasswordResetEmail(auth, email)
}
