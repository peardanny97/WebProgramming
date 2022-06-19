import { useState } from "react";
import handleLogin from "../User/handleLogin";
import handleLogout from "../User/handleLogout";

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

function UserInform(props) {
    return (
        <div className="UserInform">
            {props.user ? (
                <LoginsUserInform user={props.user} />
            ) : (
                <button className="Logout" onClick={handleLogin}>
                    로그인
                </button>
            )}
        </div>
    );
}

export default UserInform;
