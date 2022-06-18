// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDw9iWzxIKbnLssMNUeB5HnfX_bsHgDNEM",
  authDomain: "wp-team2-test.firebaseapp.com",
  projectId: "wp-team2-test",
  storageBucket: "wp-team2-test.appspot.com",
  messagingSenderId: "577892940155",
  appId: "1:577892940155:web:41557af6711c6155e165de",
  measurementId: "G-R3NKB31X1G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;