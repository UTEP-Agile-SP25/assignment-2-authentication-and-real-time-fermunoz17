// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD8rUCoPSNWzv4DBy851RNleUeTxqVAsLg",
    authDomain: "munoz-sandbox-5a564.firebaseapp.com",
    projectId: "munoz-sandbox-5a564",
    storageBucket: "munoz-sandbox-5a564.firebasestorage.app",
    messagingSenderId: "56851742216",
    appId: "1:56851742216:web:59e7f128f954e4a0ee9bbd",
    measurementId: "G-SQNM6YRC3C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app; 