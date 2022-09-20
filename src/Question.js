import React from "react";
import Answers from "./Answers";
import {nanoid} from "nanoid";

export default function Question(props){
   const [answers,setAnswers] = React.useState(allAnswers())

 


  function holdAnswer(id){
     setAnswers(oldAnswer => oldAnswer.map(
     answer => {
         return answer.id === id ?
         {... answer, isHeld: !answer.isHeld } : answer}
      ))
   }
 


// Make an array consist of all anserws which are objects 
//that have value, id and isHeld property
  function allAnswers (){
   const array = []
   array.push(props.correctAnswer)
   const secondarray = props.incorrectAnswers
   const finalArray = array.concat(secondarray)
   const shuffledArray = finalArray.sort((a,b)=>0.5-Math.random())
   const allAnswersArray = []
   for (let i = 0; i < finalArray.length ; i++){
        allAnswersArray .push({
         value:shuffledArray[i],
         isHeld:false,
         id:nanoid()
         })
   }

   return allAnswersArray
}


// map through all answers and call <Answer/> component  
     const newAnswersArray = answers. map (item => {
       return (
         <>
          <Answers 
           key = {item.id}
           option = {item.value}
           isHeld = {item.isHeld}
           holdAnswer ={()=>holdAnswer(item.id)}
           />

         </>
       )
    })
   
    return(
     <>
     <div 
     className="question-holder"
     >
        <h4>{props.title}</h4>
        {newAnswersArray}
       
     <hr/>
     </div>
     
     </>
    )
}

