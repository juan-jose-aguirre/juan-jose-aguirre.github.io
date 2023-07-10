// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';
import { getStorage } from "firebase/storage";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIMVr2tkcGlDvAeCJDi084fTOeaUzo9iE",
  authDomain: "prueba1ferrocentro.firebaseapp.com",
  projectId: "prueba1ferrocentro",
  storageBucket: "prueba1ferrocentro.appspot.com",
  messagingSenderId: "313648964280",
  appId: "1:313648964280:web:445c5ed6586f0218e8ca4d",
  measurementId: "G-BN3HE1V2E9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
