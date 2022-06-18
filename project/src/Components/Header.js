import './Header.css';
import UserInform from './UserInform';

function Header() {
    return (
        <div className="black-nav">
            <h1 id="title">더 비쌀까 쌀까?</h1>
            <UserInform />
        </div>
    );
}

export default Header;
