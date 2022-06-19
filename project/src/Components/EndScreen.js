import {Link} from "react-router-dom";
import "./EndScreen.css";

function EndScreen(props){
    console.log(props);
    return (
        <div id="end-screen">
            <img src="img/1.png" className="end-background-img" />
            <div className="end-container">
                <div className="end-content">
                    <div className="end-score">Score {props.score.current} 개</div>
                    <Link to="/" className="link">메인으로</Link>
                </div>
            </div>
        </div>
    );
}

export default EndScreen;