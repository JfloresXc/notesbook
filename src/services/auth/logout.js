import { auth } from "../../firebase"
import { signOut } from "firebase/auth"

export const logout = async () => {
	const response = await signOut(auth)
	return { response }
}
