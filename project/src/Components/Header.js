import './Header.css';
import UserInform from './UserInform';
import {Link} from "react-router-dom";

function Header(props) {
    return (
        <div className="black-nav">
            <Link to="/" style={{ textDecoration: 'none' }}><h1 id="title">더 비쌀까 쌀까?</h1></Link>
            <UserInform {...props}/>
        </div>
    );
}

export default Header;
