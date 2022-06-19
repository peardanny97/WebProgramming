import { useEffect, useState, useRef } from "react";
import { Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./GameScreen.css";
import getFoodsData from "../useCase/getFoodsData";
import StateWindow from "./StateWindow";

function GameScreen(props) {
    const [idx, setIdx] = useState(0);
    // const [score, setScore] = useState(0);
    const [foods, setFoods] = useState([]);
    const [foodsUpload, setFoodsUpload] = useState(false);

    console.log("rendering...");

    const checkAnswer = (a) => {
        if (a === 0) {
            // this means user presses expensive button
            if (foods[idx + 1].price >= foods[idx].price) {
                // Correct
                setIdx(idx + 1);
                // setScore(score+1);
                props.changeScore(props.score.current + 1);
            } else {
                window.location.replace("/end");
            }
        } else {
            // user presses cheap button
            if (foods[idx + 1].price <= foods[idx].price) {
                // Correct
                setIdx(idx + 1);
                // setScore(score+1);
                props.changeScore(props.score.current + 1);
            } else {
                window.location.replace("/end");
            }
        }
    };

    useEffect(() => {
        getFoodsData().then((res) => {
            setFoods(res.sort(() => Math.random() - 0.5));
            setFoodsUpload(true);
        });
    }, []);

    if (foodsUpload) {
        return (
            <div className="game-screen" style={{ background: "black" }}>
                <StateWindow score={props.score} idx={idx} foods={foods} />
                <div className="Left-box">
                    <h2 className="LeftText">
                        {foods[idx].title}
                        <br /> {foods[idx].price}원
                    </h2>

                    <img src={foods[idx].image} className="img-thumbnail" />
                </div>
                <div className="Right-box">
                    <h2 className="RightText">{foods[idx + 1].title}</h2>
                    <motion.button
                        className="Expensive-button"
                        type="button"
                        whileHover={{
                            scale: 1.1,
                            textShadow: "0em 0em 0.2em rgb(255,255,255)",
                            boxShadow: "0em 0em 0.2em rgb(255,255,255)",
                        }}
                        onClick={() => {
                            checkAnswer(0);
                        }}
                    >
                        비싸다!
                    </motion.button>
                    <motion.button
                        className="Cheap-button"
                        type="button"
                        whileHover={{
                            scale: 1.1,
                            textShadow: "0em 0em 0.2em rgb(255,255,255)",
                            boxShadow: "0em 0em 0.2em rgb(255,255,255)",
                        }}
                        onClick={() => {
                            checkAnswer(1);
                        }}
                    >
                        싸다!
                    </motion.button>
                    <img src={foods[idx + 1].image} className="img-thumbnail" />
                </div>
            </div>
        );
    } else {
        return <h2>로딩 중</h2>;
    }
}
export default GameScreen;
