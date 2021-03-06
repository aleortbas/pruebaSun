import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBIPB9eAc0RvoSVdhNmFNDZmSBxLG09X8s",
  authDomain: "loginsuntic.firebaseapp.com",
  projectId: "loginsuntic",
  storageBucket: "loginsuntic.appspot.com",
  messagingSenderId: "735133472044",
  appId: "1:735133472044:web:b98a355e111fafbabcc889",
  measurementId: "G-75L6YS4FLZ",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export const auth = getAuth(app);
export {db}