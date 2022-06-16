import { getAuth } from "firebase/auth";

const auth = getAuth();
auth.languageCode = 'ko';
// To apply the default browser preference instead of explicitly setting it.
// firebase.auth().useDeviceLanguage();