import firebase from "firebase";

const firebaseConfig = {
	apiKey: process.env.apiKey,

	authDomain: process.env.authDomain,

	projectId: process.env.projectId,

	storageBucket: process.env.storageBucket,

	messagingSenderId: process.env.messagingSenderId,

	appId: process.env.appId,
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
// const app = initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
export { auth };
export default db;
