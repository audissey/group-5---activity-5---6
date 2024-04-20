// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwjQj9nYUZdh8pHkgySY5V7lEIVTHcgbw",
  authDomain: "group-5-516ed.firebaseapp.com",
  projectId: "group-5-516ed",
  storageBucket: "group-5-516ed.appspot.com",
  messagingSenderId: "434557600252",
  appId: "1:434557600252:web:d4d0cdb5d2b514dad53279",
  measurementId: "G-1E8V4RS6HH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);