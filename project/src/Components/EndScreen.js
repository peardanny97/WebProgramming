import {Link} from "react-router-dom";
import "./EndScreen.css";
import setClassicRank from "../useCase/setClassicRank";
import Rank from "./Rank";
import { useEffect, useState } from "react";

function EndScreen(props){
    const [ranks, setRanks] = useState([]);
    const [rankUpload, setRankUpload] = useState(false);


    useEffect(() => {
        setClassicRank(props.user.displayName, props.score.current).then(rank => {
            setRanks(rank);
            setRankUpload(true);
            console.log(rank);
        });
    }, []);

    if(rankUpload) {
        return (
            <div id="end-screen">
                <img src="img/1.png" className="end-background-img" />
                <div className="end-container">
                    <div className="end-content">
                        <div className="ranks">
                            <h1 className="rank-title">TOP 5</h1>
                            <div className="room">
                                {ranks.map((data, rank) => <Rank key={rank} rank={rank+1} user={data.user} score={data.score} />)}
                            </div>
                        </div>
                        <div className="end-score">Score {props.score.current} 개</div>
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

export default EndScreen;