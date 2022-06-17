import { useEffect, useState, useRef } from "react";
import "./GameScreen.css";
import foods from "./foods";
import HintDialog from "./HintDialog";
// import { render } from "react-dom";
// import { motion } from "framer-motion";

function GameScreen(){
    const [leftIdx,setLeftIdx] = useState(0);  // index of left picture , 0~18
    const [rightIdx,setRightIdx] = useState(1); // index of right picture, 1~19
    const [leftUrl,setLeftUrl] = useState(foods[0].url);  // index of left picture , 0~18
    const [rightUrl,setRightUrl] = useState(foods[1].url); // index of right picture, 1~19
    const [showHint, setShowHint] = useState(false);
    
    const checkAnswer = (a) => {
        if (a===0){  // this means user presses expensive button
            if(foods[rightIdx].price >= foods[leftIdx].price){  // Correct
                setLeftIdx(leftIdx+1)
                setLeftUrl(foods[leftIdx+1].url)
                setRightIdx(rightIdx+1)
                setRightUrl(foods[rightIdx+1].url)
            }
            else{
                alert("Wrong!")  // we need to insert link to game over screen here
            }
        }
        else {  // user presses cheap button
            if(foods[rightIdx].price <= foods[leftIdx].price){  // Correct
                setLeftIdx(leftIdx+1)
                setLeftUrl(foods[leftIdx+1].url)
                setRightIdx(rightIdx+1)
                setRightUrl(foods[rightIdx+1].url)
            }
            else{
                alert("Wrong!")  // we need to isnert link to game over screen here
            }
        }
    }

    return (
        
        <div className= "game-screen" style={{background:"dimgray"}}>
            <div className = "black-nav">
    		    <h1 style = {{color: "white"}}>더 비쌀까 쌀까?</h1>
                <button className = "Hint-button" type = "button" onClick={()=>{setShowHint(true)}}>힌트</button>
                
    	    </div>
	        <div className= "Left-box">
                <h2 className="LeftText">{foods[leftIdx].name} &nbsp;&nbsp;  {foods[leftIdx].price}원</h2>		
                
                <img src= {leftUrl} className= "img-thumbnail"/>				
	        </div>
            
	        <div className= 'Right-box'>
                <h2 className="RightText">{foods[rightIdx].name}</h2>
		        <button className = "Expensive-button" type = "button" onClick={()=>{checkAnswer(0)}}>비싸다!</button>
		        <button className = "Cheap-button" type = "button" onClick={()=>{checkAnswer(1)}}>싸다!</button>
                <img src= {rightUrl} className = "img-thumbnail"/>
	        </div>
            <HintDialog
                left = {foods[leftIdx]}
                right = {foods[rightIdx]}
                handleClose = {()=>setShowHint(false)}
                showHint = {showHint}
            />
        </div>
    );
}
export default GameScreen;