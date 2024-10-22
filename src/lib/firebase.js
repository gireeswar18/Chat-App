import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "jl-chat-app.firebaseapp.com",
  projectId: "jl-chat-app",
  storageBucket: "jl-chat-app.appspot.com",
  messagingSenderId: "385081379250",
  appId: "1:385081379250:web:eb0785d5783478402dfcab"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()