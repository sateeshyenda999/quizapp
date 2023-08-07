import React, { useState } from "react";
import { Questions } from "../Organization/Questions";
import { useContext } from "react";
import Quizcontext from "../Organization/Context";
const Quiz=()=>{
    const[currquestion,setcurrentquestion]=useState(0)
    const[optionchosen,setoptionchosen]=useState("")
    const{score,setscore,setgamestate}=useContext(Quizcontext)
    const nextquestion=()=>{
        if (Questions[currquestion].answer  === optionchosen){
            setscore(score+1)
        
        }
        setcurrentquestion(currquestion+1)
            
    }
    const finish=()=>{
        if(Questions[currquestion].answer === optionchosen){
            setscore(score+1)
        }
        setgamestate("endscreen")
    }

    return(
        <div className="quiz">
            <h1>{Questions[currquestion].prompt}</h1>
            <div className="options">
                <button onClick={()=>setoptionchosen("A")}>{Questions[currquestion].optionA}</button>
                <button onClick={()=>setoptionchosen("B")}>{Questions[currquestion].optionB}</button>
                <button onClick={()=>setoptionchosen("C")}>{Questions[currquestion].optionC}</button>
                <button onClick={()=>setoptionchosen("D")}>{Questions[currquestion].optionD}</button>
            </div>
            {currquestion === Questions.length-1 ?
            (<button onClick={finish}>FINISH QUIZ</button>):
            (<button  className="next" onClick={nextquestion}>next question</button>)}
          
        </div>
    )
}
export default Quiz;