import {useState} from "react";
import HintDialog from "./HintDialog";

function StateWindow(props) {
    const [showHint, setShowHint] = useState(false);

    return (
        <>
            <div>
                <div className="ScoreText">
                    점수 &nbsp; {props.score.current}
                </div>
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