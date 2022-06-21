import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import "./Answer.css";

function Answer() {
 return(
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
        정답!
    </motion.div>
 )   
}

export default Answer;