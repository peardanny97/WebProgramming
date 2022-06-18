import "./App.css";
import app from "./FirebaseApp";
import GameScreen from "./Components/GameScreen";
import Header from "./Components/Header";
import MainScreen from "./Components/MainScreen";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
    const firebaseApp = app;

    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <Routes>
                    <Route exact path="/" element={<MainScreen />} />
                    <Route path="/game" element={ <GameScreen />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
