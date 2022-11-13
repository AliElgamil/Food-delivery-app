// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC3bSTFNfiJQTI_qWE9pPZLXl1OqoNy5JA",
  authDomain: "food-delivery-cc883.firebaseapp.com",
  projectId: "food-delivery-cc883",
  storageBucket: "food-delivery-cc883.appspot.com",
  messagingSenderId: "731846929562",
  appId: "1:731846929562:web:5745aa831fe3c2992fc323",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth(app);
