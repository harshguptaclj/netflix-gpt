// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBg-rQeIMAES_WZBHUmXJg_JifC1OVU8g",
  authDomain: "netflixgpt-9cc6d.firebaseapp.com",
  projectId: "netflixgpt-9cc6d",
  storageBucket: "netflixgpt-9cc6d.appspot.com",
  messagingSenderId: "673823116674",
  appId: "1:673823116674:web:2c498d13c5da78c494d39b",
  measurementId: "G-KY37RMF74W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();