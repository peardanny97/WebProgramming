import "./Rank.css"

function TimeAttackRank({rank, user, time}) {
    return (
        <div className="ranking">
            <div className="ranking-element">{rank}</div>
            <div className="ranking-element">{user}</div>
            <div className="ranking-element">
                <span className="digits">
                    {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
                </span>
                <span className="digits">
                    {("0" + Math.floor((time / 1000) % 60)).slice(-2)}.
                </span>
                <span className="digits mili-sec">
                    {("0" + ((time / 10) % 100)).slice(-2)}
                </span>
            </div>
        </div>
    );
}

export default TimeAttackRank;