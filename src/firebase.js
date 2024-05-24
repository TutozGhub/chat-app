import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAv75wtae0X2-kvDOG8cAAxOI6KKE-MO6I",
    authDomain: "chat-app-react-a1686.firebaseapp.com",
    projectId: "chat-app-react-a1686",
    storageBucket: "chat-app-react-a1686.appspot.com",
    messagingSenderId: "145309207393",
    appId: "1:145309207393:web:9195d43b8aae568e385320"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);