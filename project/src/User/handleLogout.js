import { getAuth, signOut } from "firebase/auth";

function handleLogout() {
    const auth = getAuth();

    signOut(auth)
        .then(() => {
            // Sign-out successful.
            console.log('logout');
            window.location.replace("/");
        })
        .catch((error) => {
            // An error happened.
        });
}

export default handleLogout;