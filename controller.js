// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3BQ4JDc4Ev8X2fMKbu2tuipIOfKiG9oY",
  authDomain: "projetopetshop-6b15b.firebaseapp.com",
  projectId: "projetopetshop-6b15b",
  storageBucket: "projetopetshop-6b15b.firebasestorage.app",
  messagingSenderId: "961514418347",
  appId: "1:961514418347:web:3c3240fc9c8dc7e36c87ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);