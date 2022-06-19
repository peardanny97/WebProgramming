import {Link} from "react-router-dom";
import "./EndScreen.css";

function EndScreen(props){
    return (
        <div id="end-screen">
            <img src="img/1.png" className="end-background-img" />
            <div className="end-container">
                <div className="end-content">
                    <div className="end-score">Score : {props.score.current} 개</div>
                    <Link to="/">메인으로</Link>
                    {/*<AddFoodsDirectly />*/}
                </div>
            </div>
        </div>
    );
}

export default EndScreen;