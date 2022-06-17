import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';
import User from './User/User';
import AddFoodsDirectly from "./admin/addFoodsDirectly";
import app from './FirebaseApp';
import getFoodsData from "./useCase/getFoodsData";
import GameScreen from "./Components/GameScreen";


function App() {
	const firebaseApp = app;
	
	return (
	<div className="App">
		<User />
		<AddFoodsDirectly />
		
		<GameScreen/>
    </div>
    );
}

export default App;
