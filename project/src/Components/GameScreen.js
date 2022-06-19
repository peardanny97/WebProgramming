import { useEffect, useState, useRef } from "react";
import { Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./GameScreen.css";
import HintDialog from "./HintDialog";
import getFoodsData from "../useCase/getFoodsData";

function GameScreen() {
    const [leftIdx, setLeftIdx] = useState(0); // index of left picture , 0~18
    const [rightIdx, setRightIdx] = useState(1); // index of right picture, 1~19
    const [leftUrl, setLeftUrl] = useState(''); // index of left picture , 0~18
    const [rightUrl, setRightUrl] = useState(''); // index of right picture, 1~19
    const [showHint, setShowHint] = useState(false);
    const [score, setScore] = useState(0);
    const [foods, setFoods] = useState([]);
    const [foodsUpload, setFoodsUpload] = useState(false);

    console.log("rendering...");

    const checkAnswer = (a) => {
        if (a === 0) {
            // this means user presses expensive button
            if (foods[rightIdx].price >= foods[leftIdx].price) {
                // Correct
                setLeftIdx(leftIdx + 1);
                setLeftUrl(foods[leftIdx + 1].image);
                setRightIdx(rightIdx + 1);
                setRightUrl(foods[rightIdx + 1].image);
                setScore(score+1);
                
            } else {
                alert("Game over!");
            }
        } else {
            // user presses cheap button
            if (foods[rightIdx].price <= foods[leftIdx].price) {
                // Correct
                setLeftIdx(leftIdx + 1);
                setLeftUrl(foods[leftIdx + 1].image);
                setRightIdx(rightIdx + 1);
                setRightUrl(foods[rightIdx + 1].image);
                setScore(score+1);
                
            } else {
                alert("Game over!");
            }
        }
    };

    useEffect(() => {
        getFoodsData().then(res => {
            setFoods(res.sort(()=> Math.random() - 0.5));
            setLeftUrl(res[0].image);
            setRightUrl(res[1].image);
            setFoodsUpload(true);
            console.log("foodset");
        })
    }, []);


    if (foodsUpload) {
        return (
            <div className="game-screen" style={{ background: "black" }}>
                <div>
                    <div className = "ScoreText">점수 &nbsp; {score}</div>
                    <button
                        className="Hint-button"
                        type="button"
                        onClick={() => {
                            setShowHint(true);
                        }}
                    >
                        힌트
                    </button>
                </div>
                <div className="Left-box">
                    <h2 className="LeftText">
                        {foods[leftIdx].title} 
                        <br/> {foods[leftIdx].price}원
                    </h2>

                    <img src={leftUrl} className="img-thumbnail" />
                </div>

                <div className="Right-box">
                    <h2 className="RightText">{foods[rightIdx].title}</h2>
                    <motion.button
                        className="Expensive-button"
                        type="button"
                        whileHover={{
                            scale:1.1,
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
                            scale:1.1,
                            textShadow: "0em 0em 0.2em rgb(255,255,255)",
                            boxShadow: "0em 0em 0.2em rgb(255,255,255)",
                        }}
                        onClick={() => {
                            checkAnswer(1);
                        }}
                    >
                        싸다!
                    </motion.button>
                    <img src={rightUrl} className="img-thumbnail" />
                </div>
                <HintDialog
                    left={foods[leftIdx]}
                    right={foods[rightIdx]}
                    handleClose={() => setShowHint(false)}
                    showHint={showHint}
                />
            </div>
        );
    } else {
        return (
            <h2>
                로딩 중
            </h2>
        );
    }

}
export default GameScreen;
