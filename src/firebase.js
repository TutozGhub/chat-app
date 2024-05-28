import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_APP_API_KEY,
    authDomain: "chat-app-react-a1686.firebaseapp.com",
    projectId: "chat-app-react-a1686",
    storageBucket: "chat-app-react-a1686.appspot.com",
    messagingSenderId: "145309207393",
    appId: "1:145309207393:web:9195d43b8aae568e385320"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
