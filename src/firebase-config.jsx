// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMlMO98VeGnsfHPLBg5ht8idw_pb0GomY",
  authDomain: "dashboard-data-7825f.firebaseapp.com",
  projectId: "dashboard-data-7825f",
  storageBucket: "dashboard-data-7825f.appspot.com",
  messagingSenderId: "614185571244",
  appId: "1:614185571244:web:04df5342430ef0a9baa009",
  measurementId: "G-XY9LQLRGWV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const db = getFirestore(app);