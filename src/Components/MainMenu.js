import React from "react";
import "../App.css"
import { useContext } from "react";
import Quizcontext from "../Organization/Context";
const MainMenu=()=>{
    const{setgamestate}=useContext(Quizcontext)

    return(
        <div className="Menu">
        <button onClick={()=>setgamestate("quiz")}>start quiz</button>
        </div>
    )
}
export default MainMenu