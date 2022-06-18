import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import AddFoodsDirectly from "./admin/addFoodsDirectly";
import app from "./FirebaseApp";
import getFoodsData from "./useCase/getFoodsData";
import GameScreen from "./Components/GameScreen";
import Header from "./Components/Header";
import MainScreen from "./Components/MainScreen";

function App() {
    const firebaseApp = app;

    return (
        <div className="App">
            <Header />
            <MainScreen />
            <GameScreen />
        </div>
    );
}

export default App;
