import React, { useState } from "react"
import "./App.css";
import Endscreen from "./Components/Endscreen";
import "./Components/MainMenu"
import MainMenu from "./Components/MainMenu";
import Quiz from "./Components/Quiz";
import "./Organization/Context"
import Quizcontext from "./Organization/Context";

 const App=()=>{
   const[score,setscore]=useState(0)
   const [gamestate,setgamestate]=useState("menu")
   return(
     <div className="App">
       <h1>Quizz App</h1>
       <Quizcontext.Provider value={{gamestate,setgamestate,score,setscore}}>
       {gamestate ==="menu"  && <MainMenu/>} 
       {gamestate === "quiz" && <Quiz/>}
       {gamestate === "endscreen" && <Endscreen/>}
       </Quizcontext.Provider>
     </div>
   )
 }
 export default App;
