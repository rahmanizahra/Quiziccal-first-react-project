import React from "react";
import {nanoid} from "nanoid";
import he from 'he';

export default function Question({allAnswers, qID, question, isShowAnswers, updateHeld}){
  const answerButtonsJSX = allAnswers .map((answer,index) =>{
    let styles = {
      backgroundColor: answer.isHeld ? "gray": "white",
      color: answer.isHeld? "black":"gray"
    }
    if(isShowAnswers){
      if(answer.isHeld && answer.isCorrect){
        styles ={backgroundColor :"green"}
      }else if(answer.isHeld && answer.isCorrect ===false){
        styles ={backgroundColor:"red",opacity:"50%"}
      }else if(answer.isCorrect){
        styles = {backgroundColor:"green"}
      }else if(answer.isCorrect === false){
        styles = {opacity:"50%"}
      }
    }
return(
  <button className="answer"
  key = {nanoid()}
  onClick = {()=> updateHeld(qID,answer.id)}
  style = {styles}
   >
    {he.decode(allAnswers[index].value)}
  </button>
)
  })
  return(
<div>
  <h3>
    {he.decode(question)}
  </h3>
  <div>
    {answerButtonsJSX}
  </div>
</div>
  )
}
