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
	apiKey: "AIzaSyASi4D5MYOhaVs8M_nIp9Hj_FF3TUVmdDY",
	authDomain: "mary-2022-06.firebaseapp.com",
	projectId: "mary-2022-06",
	storageBucket: "mary-2022-06.appspot.com",
	messagingSenderId: "789068529759",
	appId: "1:789068529759:web:226956c56c04a839ce1bea",
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const storage = getStorage(app)
const auth = getAuth(app)

export { db, storage, auth }
