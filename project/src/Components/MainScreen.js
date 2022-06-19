import "./MainScreen.css";
import { Link } from "react-router-dom";
import handleLogin from "../User/handleLogin";

function GreetingMessage({ user }) {
    return (
        <div className="main-user-name">{user.displayName} 님 환영합니다.</div>
    );
}

function MainScreen(props) {
    return (
        <div id="main-screen">
            <img src="img/1.png" className="main-background-img" />
            <div className="main-container">
                <div className="main-content">
                    {props.user ? (
                        <GreetingMessage {...props} />
                    ) : (
                        <div className="main-user-name">
                            로그인하고 게임을 시작하세요
                        </div>
                    )}

                    <div className="game-discription">
                        더 비싼 음식을 고르는 게임
                    </div>
                    {props.user ? (
                        <Link to="/game">게임 시작하기</Link>
                    ) : (
                        <button onClick={handleLogin}>로그인하기</button>
                    )}

                    {/*<AddFoodsDirectly />*/}
                </div>
            </div>
        </div>
    );
}

export default MainScreen;
