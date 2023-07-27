import { getDatabase } from "firebase/database"
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCG5YlXj6NOiZf3vFeVdxsa5efq1vsqxzY",
  authDomain: "registration-form-e30b8.firebaseapp.com",
  databaseURL: "https://registration-form-e30b8-default-rtdb.firebaseio.com",
  projectId: "registration-form-e30b8",
  storageBucket: "registration-form-e30b8.appspot.com",
  messagingSenderId: "1085597449974",
  appId: "1:1085597449974:web:33271b785ddd4dc5ed36d7",
  measurementId: "G-8Y46MYQ4CR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const database = getDatabase(app);