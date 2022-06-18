import "./MainScreen.css";

function MainScreen() {
    return (
        <div id="main-screen">
            <img src="img/1.png" className="main-background-img" />
            <div className="main-container">
                <div className="user-name"></div>
                <button>게임 시작하기</button>
                <button>데이터 보내기</button>
            </div>
        </div>
    );
}

export default MainScreen;
