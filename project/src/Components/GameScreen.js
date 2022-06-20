import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import "./GameScreen.css";
import { useNavigate } from "react-router-dom"; 
import getFoodsData from "../useCase/getFoodsData";
import StateWindow from "./StateWindow";

function GameScreen(props) {
    const [idx, setIdx] = useState(0);
    const [foods, setFoods] = useState([]);
    const [foodsUpload, setFoodsUpload] = useState(false);
    const navigate = useNavigate();

    console.log("rendering...");

    const checkAnswer = (a) => {
        if (a === 0) {
            // this means user presses expensive button
            if (foods[idx + 1].price >= foods[idx].price) {
                // Correct
                setIdx(idx + 1);
                props.changeScore(props.score.current + 1);
            } else {
                navigate("../end");
            }
        } else {
            // user presses cheap button
            if (foods[idx + 1].price <= foods[idx].price) {
                // Correct
                setIdx(idx + 1);
                props.changeScore(props.score.current + 1);
            } else {
                navigate("../end");
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

    useEffect(()=>{
        if(foods.length !== 0 && idx === foods.length ){
            navigate("../end");
        }
    }, [idx]) // all correct case

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
