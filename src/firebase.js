import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"
import { getAuth } from "firebase/auth"

// const {
// 	REACT_APP_API_KEY,
// 	REACT_APP_AUTH_DOMAIN,
// 	REACT_APP_PROYECT_ID,
// 	REACT_APP_STORAGE_BUCKET,
// 	REACT_APP_MESSAGING_SENDER_ID,
// 	REACT_APP_ID,
// } = process.env

// const firebaseConfig = {
// 	apiKey: REACT_APP_API_KEY ,
// 	authDomain: REACT_APP_AUTH_DOMAIN,
// 	projectId: REACT_APP_PROYECT_ID,
// 	storageBucket: REACT_APP_STORAGE_BUCKET,
// 	messagingSenderId: REACT_APP_MESSAGING_SENDER_ID,
// 	appId: REACT_APP_ID,
// }

const firebaseConfig = {
	apiKey: "AIzaSyDVbxeUHaAIhxvRgSgMf6f9OremlxoH-OU",
	authDomain: "notesbook-e5135.firebaseapp.com",
	projectId: "notesbook-e5135",
	storageBucket: "notesbook-e5135.appspot.com",
	messagingSenderId: "130312358830",
	appId: "1:130312358830:web:25fea6fa503b8a8207563f",
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const storage = getStorage(app)
const auth = getAuth(app)

export { db, storage, auth }
