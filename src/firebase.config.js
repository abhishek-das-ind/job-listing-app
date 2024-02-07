// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyClzql1elfiXMBzat7L6JvKVpUb5jxWyvg",
  authDomain: "job-listing-app-f94e6.firebaseapp.com",
  projectId: "job-listing-app-f94e6",
  storageBucket: "job-listing-app-f94e6.appspot.com",
  messagingSenderId: "921791182706",
  appId: "1:921791182706:web:ae8dec1432d63f53bf8feb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};