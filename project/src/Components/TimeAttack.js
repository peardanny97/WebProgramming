import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import "./GameScreen.css";
import { useNavigate } from "react-router-dom";
import getFoodsData from "../useCase/getFoodsData";
import StateWindow from "./StateWindow";
import { CorrectButton, WrongButton } from "./ResultButton";
import { Correct, Wrong } from "./Answer";

function TimeAttack(props) {
    const [idx, setIdx] = useState(0);
    const [foods, setFoods] = useState([]);
    const [foodsUpload, setFoodsUpload] = useState(false);
    const navigate = useNavigate();
    const [handleStart, setHandleStart] = useState(true);
    const [handlePenalty, setHandlePenalty] = useState(false);
    const [handleReset, setHandleReset] = useState(false);
    const [correctOpen, setCorrectOpen] = useState(false);
    const [wrongOpen, setWrongOpen] = useState(false);

    const checkAnswer = (a) => {
        if (a === 0) {
            // this means user presses expensive button
            if (foods[idx + 1].price >= foods[idx].price) {
                // Correct
                if (idx + 1 === 15) {
                    // game clear
                    setHandlePenalty(false);
                    setHandleReset(true);
                    setHandleStart(false);
                    setCorrectOpen(true);
                    navigate("../end"); // end시 시간 출력하도록 수정 필요
                }
                setIdx(idx + 1);
                props.changeScore(props.score.current + 1);
                setCorrectOpen(true);
                setHandlePenalty(false);
            } else {
                setWrongOpen(true);
                setHandlePenalty(true);
            }
        } else {
            // user presses cheap button
            if (foods[idx + 1].price <= foods[idx].price) {
                // Correct
                if (idx + 1 === 15) {
                    // game clear
                    setHandlePenalty(false);
                    setHandleReset(true);
                    setHandleStart(false);
                    setCorrectOpen(true);
                    navigate("../end"); // end시 시간 출력하도록 수정 필요
                }
                setIdx(idx + 1);
                props.changeScore(props.score.current + 1);
                setCorrectOpen(true);
                setHandlePenalty(false);
            } else {
                setWrongOpen(true);
                setHandlePenalty(true);
            }
        }
    };

    useEffect(() => {
        getFoodsData().then((res) => {
            setFoods(res.sort(() => Math.random() - 0.5));
            setFoodsUpload(true);
            props.changeScore(0);
        });
    }, []);

    useEffect(() => {
        if (foods.length !== 0 && idx === foods.length) {
            navigate("../end");
        }
    }, [idx]);

    if (foodsUpload) {
        return (
            <div className="game-screen" style={{ background: "black" }}>
                <CorrectButton open={correctOpen} setOpen={setCorrectOpen} />
                <WrongButton open={wrongOpen} setOpen={setWrongOpen} />
                {/* <Correct isCorrect = {correctOpen} setIsCorrect = {setCorrectOpen}/>
                <Wrong isWrong = {wrongOpen} setIsWrong = {setWrongOpen}/> */}

                <StateWindow
                    setHandlePenalty = {setHandlePenalty}
                    handleStart={handleStart}
                    handlePenalty={handlePenalty}
                    handleReset={handleReset}
                    isTimeAttack={true}
                    idx={idx}
                    foods={foods}
                />
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

                <div className="Hidden-box">
                    <img src={foods[idx + 2].image} className="img-thumbnail" />
                </div>
                <div className="Hidden-box">
                    <img src={foods[idx + 3].image} className="img-thumbnail" />
                </div>
                <div className="Hidden-box">
                    <img src={foods[idx + 4].image} className="img-thumbnail" />
                </div>
            </div>
        );
    } else {
        return <h2>로딩 중</h2>;
    }
}
export default TimeAttack;
