import {useState} from 'react';
import handleLogin from './handleLogin';
import handleLogout from './handleLogout';
import {getAuth, onAuthStateChanged} from 'firebase/auth';

function User() {
    const [user, setUser] = useState(null);
    
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          setUser(user);
          // ...
        } else {
          // User is signed out
          // ...
          setUser(null);
        }
      });

    return (
        <div className="User">
            <h1>{user ? user.displayName : "로그인하세요"}</h1>
            <button className="Login" onClick={handleLogin}>로그인</button>
            <button className="Logout" onClick={handleLogout}>로그아웃</button>
        </div>
    );
}

export default User;