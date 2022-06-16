import { getAuth, signOut } from "firebase/auth";

function handleLogout() {
    const auth = getAuth();

    signOut(auth)
        .then(() => {
            // Sign-out successful.
            console.log('logout');
        })
        .catch((error) => {
            // An error happened.
        });
}

export default handleLogout;