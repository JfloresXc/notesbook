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

export const expressions = {
	user: /^[a-zA-Z0-9\_\-]{4,16}$/,
	names: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
	password: /^.{4,12}$/,
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	phone: /^\d{7,9}$/,
}
