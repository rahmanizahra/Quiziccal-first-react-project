import React from "react";
import Question from "./Question";
import {nanoid} from "nanoid";


export default function Secondpage(){
const [questionData,setQuestionData] = React . useState([])
React.useEffect(()=>{
    fetch("https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple")
         .then(res => res.json())
         .then (data => setQuestionData(data.results))
},[])

console.log(questionData)

console.log(answerrs)
// function allAnswers (){
//     for (let i = 0; i<questionData.length;i++){
//         const correctAnswer = questionData[i].correct_answer 
//         const incorrectAnswers = questionData[i].incorrect_answers
//         const firstArray = []
//         firstArray.push(correctAnswer)
//         const finalArray = firstArray.concat(incorrectAnswers)
//         const allAnswersArray = []
//         for (let i = 0; i < finalArray.length ; i++){
//             allAnswersArray .push({
//               value:finalArray[i],
//               isHeld:false,
//               id:nanoid()
//              })
//             }
//         return allAnswersArray
//     } 
//   }
   

// function checkAnswers(){
//     for(let i =0 ; i<allAnswersArray.length;i++){
 //         if(allAnswersArray[i].isHeld === true){
//               if(allAnswersArray[i].value === questionData.correctAnswer){
//                  backgroundColor : "green"
//              }
//                else{
//                   backgroundColor: "red"
//                   }
//           }
//       }
//    
//       }



const newArray = questionData.map(item => {
    return(
    <>
       < Question  
           id = {nanoid()}
           key = {item.question}
        //    handleAnswer = {allAnswers()}
           title = {item.question}
           correctAnswer = {item.correct_answer}
           incorrectAnswers = {item.incorrect_answers}
       />       
    </>
        )
})
    
    return(
        <>
         {newArray}
         <div className='button-holder'>
         <button className='start-button'>Check Answers</button>
        </div>
        </>
       

    )
}
