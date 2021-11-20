import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyDOY2-OMAaZdq9qVu8RhXNoq1gxx-fE-vk",

	authDomain: "email-login-86d8e.firebaseapp.com",

	projectId: "email-login-86d8e",

	storageBucket: "email-login-86d8e.appspot.com",

	messagingSenderId: "322600732267",

	appId: "1:322600732267:web:0002316099c8a285d5532e",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
// const app = initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
export { auth };
export default db;
