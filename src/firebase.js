// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6e3zQ5iZyaHIG7S-YfVSK-anbOsgNqDY",
  authDomain: "blog-43f9b.firebaseapp.com",
  projectId: "blog-43f9b",
  storageBucket: "blog-43f9b.appspot.com",
  messagingSenderId: "467437780340",
  appId: "1:467437780340:web:9c235b82696e0c92a94021"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);


export { auth, provider, db };