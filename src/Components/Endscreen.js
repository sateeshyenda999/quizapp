import React, { useContext } from "react";
import Quizcontext from "../Organization/Context";
import { Questions } from "../Organization/Questions";

const Endscreen=()=>{

    const{score,setscore,setgamestate}=useContext(Quizcontext)
    const restartquiz=()=>{
        setscore(0)
        setgamestate("menu")
    }
    return(
        <div className="end">
            <h1>Quiz Finished</h1>
            <h3>your score is {score}/{Questions.length}</h3>
            <button onClick={restartquiz}>Restart Quiz</button>
        </div>
    )
}
export default Endscreen