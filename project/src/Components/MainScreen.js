import "./MainScreen.css";

function MainScreen() {
    return (
        <div id="main-screen">
            <img src="img/1.png" className="main-background-img" />
            <div className="main-container">
                <div className="main-content">
                    <div className="main-user-name">유저이름 님 환영합니다!</div>
                    <div className="game-discription">더 비싼 음식을 고르는 게임</div>
                    <button>게임 시작하기</button>
                    <button>데이터 보내기</button>
                </div>
            </div>
        </div>
    );
}

export default MainScreen;
