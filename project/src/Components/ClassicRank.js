import "./Rank.css"

function ClassicRank({rank, user, score}) {
    return (
        <div className="ranking">
          <div className="ranking-element">{rank}</div>
          <div className="ranking-element">{user}</div>
          <div className="ranking-element">{score}개</div>
      </div>
    );
}

export default ClassicRank;