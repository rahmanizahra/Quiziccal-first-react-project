import React from "react"

export default function Answers(props) {
    
       return ( 
       
      <>
        <div className="question-holder">
           <div className="answer-container">
              <div 
               style={{
                  backgroundColor : props.isHeld ? "#4444" : "white"
                  }}
               className="answer"
               onClick={props.holdAnswer}
               >
               {props.option}
             </div>
           </div>
         </div>
      </>
    )
}