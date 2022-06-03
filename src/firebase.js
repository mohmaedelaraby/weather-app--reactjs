// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZ1dCxXXDoKdCRSCX26hYLiMcH-dgoECg",
  authDomain: "weather-app-react-js.firebaseapp.com",
  projectId: "weather-app-react-js",
  storageBucket: "weather-app-react-js.appspot.com",
  messagingSenderId: "32624905677",
  appId: "1:32624905677:web:f24aebdf4c2c0931670884",
  measurementId: "G-P90M178BFL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);