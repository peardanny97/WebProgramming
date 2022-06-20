import "./MainScreen.css";
import { Link } from "react-router-dom";
import handleLogin from "../User/handleLogin";
import AddFoodsDirectly from "../admin/addFoodsDirectly";
import { motion } from "framer-motion";

function GreetingMessage({ user }) {
    return (
        <div className="main-user-name">{user.displayName} 님 환영합니다.</div>
    );
}

function MainScreen(props) {
    console.log(props);
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
                        당신의 먹잘알 지수는?
                    </div>
                    {props.user ? (
                        // <Link to="/timeattack" className="link">
                        //     <div className="game-discription">게임 시작하기</div>
                        // </Link>
                    <Link to="/timeattack" className="link">    
                        <motion.button
                            className="Timeattack-button"
                            type="button"
                            whileHover={{
                                scale: 1.1,
                                textShadow: "0em 0em 0.2em rgb(255,255,255)",
                                boxShadow: "0em 0em 0.2em rgb(255,255,255)",
                            }}
                            >
                                타임 어택
                            </motion.button>
                    </Link>
                    ) : (
                        <button onClick={handleLogin} className = "Login-button">로그인하기</button>
                    )}
                    {props.user ? (
                        <Link to="/game" className="link">
                            <motion.button
                            className="Classic-button"
                            type="button"
                            whileHover={{
                                scale: 1.1,
                                textShadow: "0em 0em 0.2em rgb(255,255,255)",
                                boxShadow: "0em 0em 0.2em rgb(255,255,255)",
                            }}
                            >
                                클래식
                            </motion.button>
                        </Link>
                    
                    ) : (
                        <></>
                    )}
                </div>
            </div>
        </div>
    );
}

export default MainScreen;
