import "./MainScreen.css";
import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import handleLogin from "../User/handleLogin";
import AddFoodsDirectly from "../admin/addFoodsDirectly";
import { motion } from "framer-motion";
import React from "react";



function GreetingMessage({ user }) {
    return (
        <div className="main-user-name">{user.displayName} 님 환영합니다.</div>
    );
}
const showM = () => {
    console.log("hi?")
}

let random_thumbnail_number = Math.floor(Math.random()*20) +1
let random_thumbnail = "img/"+random_thumbnail_number.toString() +".png"
function MainScreen(props) {
    console.log(props);
    const [showClassicRule, setShowClassicRule] = useState(false);
    const [showTimeAttackRule, setshowTimeAttackRule] = useState(false);

    return (
        <div id="main-screen">
            <img src={random_thumbnail} className="main-background-img" />
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
                            onMouseOver = {
                                ()=>setshowTimeAttackRule(true)
                            }
                            onMouseOut = {
                                ()=>setshowTimeAttackRule(false)
                            }
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
                        <motion.button
                            className="Login-button"
                            type="button"
                            onClick={handleLogin}
                            whileHover={{
                                scale: 1.1,
                                textShadow: "0em 0em 0.2em rgb(255,255,255)",
                                boxShadow: "0em 0em 0.2em rgb(255,255,255)",
                            }}
                            >
                                로그인하기
                            </motion.button>
                    )}
                    {props.user ? (
                        <Link to="/classic" className="link">
                            <motion.button
                            className="Classic-button"
                            type="button"
                            onMouseOver = {
                                ()=>setShowClassicRule(true)
                            }
                            onMouseOut = {
                                ()=>setShowClassicRule(false)
                            }
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
                    {showClassicRule?
                    <div className="rule-discription">
                        틀리지 않고 최대한 많이 맞춰보세요! <br/>
                        오른쪽 메뉴가 더 비쌀까 쌀까?
                    </div>:
                    <></>
                    }
                    {showTimeAttackRule?
                    <div className="rule-discription">
                        최대한 빨리 15개를 맞춰보세요! <br/>
                        틀리면 패널티 10초이니 광클 금지!
                    </div>:
                    <></>
                    }
                </div>
            </div>
        </div>
    );
}

export default MainScreen;
