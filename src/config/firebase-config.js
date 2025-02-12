// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhDBHahyEkSTjSnlpyCfgpHSh8ZT5mtpE",
  authDomain: "fir-crud-c96f2.firebaseapp.com",
  projectId: "fir-crud-c96f2",
  storageBucket: "fir-crud-c96f2.firebasestorage.app",
  messagingSenderId: "821843797254",
  appId: "1:821843797254:web:205856513b655e3c8d2a87",
  measurementId: "G-J0P10444HZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);