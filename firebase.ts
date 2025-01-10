// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABQ3Mcw0YekMFuJ59ks2k-qn8wN7lTVs4",
  authDomain: "notion-clone-3a51f.firebaseapp.com",
  projectId: "notion-clone-3a51f",
  storageBucket: "notion-clone-3a51f.firebasestorage.app",
  messagingSenderId: "86745668381",
  appId: "1:86745668381:web:9af1ee63f6015b35015ff4",
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { db };
