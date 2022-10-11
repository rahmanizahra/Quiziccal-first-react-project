
import React from "react"

export default function Home({toggleIsHome}){
 return(
<div className="first-page" >
       
  <h1 className="title">Quizzical</h1>
  <p>Check your knowledge Here!</p>
  <div className='button-holder'>
     <button onClick={toggleIsHome} className='start-button'>Start Quiz</button>
  </div>
       
</div>
    
    
 )
}






