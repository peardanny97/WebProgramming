import {Link} from "react-router-dom";
import "./EndScreen.css";
import setTimeAttackRank from "../useCase/setTimeAttackRank";
import TimeAttackRank from "./TimeAttackRank";
import { useEffect, useState } from "react";

function TimeAttackEndScreen(props){
    const [ranks, setRanks] = useState([]);
    const [rankUpload, setRankUpload] = useState(false);
    let random_thumbnail_number = Math.floor(Math.random()*20) +1
    let random_thumbnail = "img/"+random_thumbnail_number.toString() +".png"

    useEffect(() => {
        setTimeAttackRank(props.user.displayName, props.time).then(rank => {
            setRanks(rank);
            setRankUpload(true);
            console.log(rank);
        });
    }, []);

    if(rankUpload) {
        return (
            <div id="end-screen">
                <img src={random_thumbnail} className="end-background-img" />
                <div className="end-container">
                    <div className="end-content">
                        <div className="ranks">
                            <h1 className="rank-title">TOP 5</h1>
                            <div className="rank">
                                {ranks.map((data, rank) => <TimeAttackRank key={rank} rank={rank+1} user={data.user} time={data.time} />)}
                            </div>
                        </div>
                        <div className="end-score">
                            <span>Score </span>
                            <span className="digits">
                                {("0" + Math.floor((props.time / 60000) % 60)).slice(-2)}:
                            </span>
                            <span className="digits">
                                {("0" + Math.floor((props.time / 1000) % 60)).slice(-2)}.
                            </span>
                            <span className="digits mili-sec">
                                {("0" + ((props.time / 10) % 100)).slice(-2)}
                            </span>
                        </div>
                        <Link to="/" className="link">메인으로</Link>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <h2>로딩 중</h2>
        );
    }

}

export default TimeAttackEndScreen;