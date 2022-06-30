const ERRORS = [
	{ code: "auth/wrong-password", message: "❌ Contraseña incorrecta ❌" },
	{
		code: "auth/invalid-email",
		message: "❌ Correo electrónico no encontrado ❌",
	},
	{
		code: "auth/too-many-requests",
		message: "❌ Muchos intentos, inténtalo más tarde ❌",
	},
	{ code: "auth/user-not-found", message: "❌ Usuario no encontrado ❌" },
	{
		code: "auth/email-already-in-use",
		message: "❌ Correo electrónico en uso ❌",
	},
	{
		code: "auth/weak-password",
		message: "❌ Contraseña débil ❌",
	},
]

export function validateError(code) {
	let codeOwn = code
	const errorFinded = ERRORS.find(({ code }) => codeOwn === code)
	return errorFinded ? errorFinded.message : null
}

export const readAsFileData = () => {
	return fetch("public/logo.png", {
		method: "GET",
	}).then((response) => response.blob())
}
