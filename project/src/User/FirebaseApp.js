// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwqkcJMDZMAOf9zke7zIGy3twb-lSIea8",
  authDomain: "rhdwnsgud-b0315.firebaseapp.com",
  projectId: "rhdwnsgud-b0315",
  storageBucket: "rhdwnsgud-b0315.appspot.com",
  messagingSenderId: "369273948507",
  appId: "1:369273948507:web:822ae1f63985182324727e",
  measurementId: "G-1W31VBE6XT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;