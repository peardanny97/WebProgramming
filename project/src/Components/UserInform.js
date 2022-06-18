import { useState } from "react";
import handleLogin from "../User/handleLogin";
import handleLogout from "../User/handleLogout";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import "./UserInform.css";

function LoginsUserInform({ user }) {
    return (
        <>
            <h1 className="header-user-name">{user.displayName}</h1>
            <button className="Logout" onClick={handleLogout}>
                로그아웃
            </button>
        </>
    );
}

function UserInform() {
    const [user, setUser] = useState(null);

    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if (user) {
            setUser(user);
        } else {
            setUser(null);
        }
    });

    return (
        <div className="UserInform">
            {user ? (
                <LoginsUserInform user={user} />
            ) : (
                <button className="Login" onClick={handleLogin}>
                    로그인
                </button>
            )}
        </div>
    );
}

export default UserInform;
