import "./App.css";
import app from "./FirebaseApp";
import GameScreen from "./Components/GameScreen";
import Header from "./Components/Header";
import MainScreen from "./Components/MainScreen";
import TimeAttack from "./Components/TimeAttack";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ClassicEndScreen from "./Components/ClassicEndScreen";
import TimeAttackEndScreen from "./Components/TimeAttackEndScreen";
import {useState, useRef} from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

function App() {
    const firebaseApp = app;
    const [user, setUser] = useState(null);
    const score = useRef(0);

    console.log("app start");

    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if (user) {
            setUser(user);
        } else {
            setUser(null);
        }
    });

    function changeScore(n) {
        score.current = n;
    }

    return (
        <BrowserRouter>
            <div className="App">
                <Header user={user}/>
                <Routes>
                    <Route exact path="/" element={<MainScreen user={user}/>} />
                    <Route path="/classic" element={ <GameScreen score={score} changeScore={changeScore}/>} />
                    <Route path="/timeattack" element={ <TimeAttack score={score} changeScore={changeScore}/>} />
                    <Route path="/classic-end" element={ <ClassicEndScreen user={user} score={score} />} />
                    <Route path="/timeattack-end" element={ <TimeAttackEndScreen user={user} score={score} />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
