import {useState} from "react";
import HintDialog from "./HintDialog";
import StopWatch from "./StopWatch";
import { motion } from "framer-motion";
import "./StateWindow.css";

function StateWindow(props) {
    const [showHint, setShowHint] = useState(false);

    return (
        <>
            <div>
                {props.isTimeAttack?
                <div className="ScoreText">
                    <StopWatch 
                        handleStart = {props.handleStart}
                        handlePenalty = {props.handlePenalty}
                        handleReset = {props.handleReset}
                     />
                </div>
                :
                <div className="ScoreText">
                    점수 &nbsp; {props.score.current}
                </div>
                }
                
                
                {
                        props.handlePenalty?
                        <motion.div className="HintText" 
                        animate = {{y:-20}}
                        transition={{type:'spring', stiffness:300}}>
                            +10s
                        </motion.div>:<></>
                }
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
            <HintDialog
                left={props.foods[props.idx]}
                right={props.foods[props.idx + 1]}
                handleClose={() => setShowHint(false)}
                showHint={showHint}
            />
        </>
    );
}

export default StateWindow;