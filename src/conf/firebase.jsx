import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCbORqXcqUDCw2rd0rflmN3u2zJE0y9fDE",
  authDomain: "react-todo-app-fb30f.firebaseapp.com",
  projectId: "react-todo-app-fb30f",
  storageBucket: "react-todo-app-fb30f.appspot.com",
  messagingSenderId: "917216816345",
  appId: "1:917216816345:web:a6316b10af466da374e2c8",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
