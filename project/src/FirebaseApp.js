// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwnC0wObbG8-1f1UJIXE4KOWcYbUu2N7Y",
  authDomain: "snu-wp-team2.firebaseapp.com",
  projectId: "snu-wp-team2",
  storageBucket: "snu-wp-team2.appspot.com",
  messagingSenderId: "991115484467",
  appId: "1:991115484467:web:35906382017dd70558b246",
  measurementId: "G-H4R1450QRJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;