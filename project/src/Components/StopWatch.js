
import React, { useState } from "react";
import Timer from "./Timer";

  
function StopWatch(props) {
  const [isActive, setIsActive] = useState(false);
  const [time, setTime] = useState(0);
  
  React.useEffect(() => {
    let interval = null;
  
    if (isActive) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive]);
  React.useEffect(()=>{
    if (props.handleStart) {
        setIsActive(true);
    }
  },[]);
  React.useEffect(()=>{
    if (props.handlePenalty) {
        setTime( time + 10000);
        setTimeout(() => {
          props.setHandlePenalty(false);
      }, 1500);
    }
  },[props.handlePenalty]);
  
  
  const handleReset = () => {
    setIsActive(false);
    setTime(0);
  };
  
  return (
    
    <div className="stop-watch">
      <Timer time={time} />
      
    </div>
  );
}
  
export default StopWatch;