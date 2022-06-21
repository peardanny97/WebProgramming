import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import "./Answer.css";


function Correct(props) {
    useEffect(() => {
        setTimeout(() => {
            props.setIsCorrect(false);
        }, 700);
    }, [props.isCorrect])
    return(
    props.isCorrect?
        <motion.div
        className="Correct-Answer"
        
        animate={{
            scale:[1,2,0],
            borderRadius: ["10%", "10%","10%"],
            textShadow: ["0em 0em 0.2em rgb(255,255,255)","0em 0em 0.2em rgb(255,255,255)","0em 0em 0.2em rgb(255,255,255)"],    
            
        }}
        transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5],
        }}
        >
            정답!
        </motion.div>:
        <>/</>
 )   
}
function Wrong(props) {
    useEffect(() => {
        setTimeout(() => {
            props.setIsWrong(false);
        }, 1200);
    }, [props.isWrong])
    return(
       props.isWrong?
           <motion.div
           className="Correct-Answer"
           animate={{
               scale:[1,2,0],
               
           }}
           transition={{
               duration: 2,
               ease: "easeInOut",
               times: [0, 0.2, 0.5],
           }}
           >
               오답!
           </motion.div>:
           <>/</>
    )   
   }


export {Correct, Wrong};