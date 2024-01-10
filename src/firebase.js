// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  indexedDBLocalPersistence,
  initializeAuth,
  browserLocalPersistence,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBJZjSNKTRXFS2RSulm0IbmUMMXmXIiFr8",
  authDomain: "bloodmed-ffd82.firebaseapp.com",
  projectId: "bloodmed-ffd82",
  storageBucket: "bloodmed-ffd82.appspot.com",
  messagingSenderId: "793660057313",
  appId: "1:793660057313:web:a4c8a7913e71ce4467f9a0",
};

// Initialize Firebase

export const app =
  getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = initializeAuth(app, {
  persistence: [indexedDBLocalPersistence, browserLocalPersistence],
});
