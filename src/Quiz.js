import React from "react";
import { nanoid } from 'nanoid';
import Question from "./Question";
export default function Quiz({toggleIsHome}){
 const [quizData,setQuizData] = React.useState([])
 const [isShowAnswers,setIsShowAnswers] = React.useState(false)
 const[resetQuiz,setResetQuiz] = React.useState(0)
 const [isLoading,setIsLoading] = React.useState(true)
  React.useEffect(()=>{
    fetch("https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple")
         .then(res => res.json())
         .then (data =>{
           setQuizData(() => {
            return data.results.map(question =>{
             const incorrect = question.incorrect_answers.map(answer => {
               return {value:answer, id:nanoid(), isHeld:false, isCorrect: false}
               })
             const correct = {value:question.correct_answer, id:nanoid(),isHeld:false,isCorrect:true}
             let allAnswersArr = [...incorrect]
             const randomNum = Math.floor(Math.random() * 4);
             allAnswersArr.splice(randomNum, 0, correct);
             return{...question,allAnswers: allAnswersArr,id:nanoid()}
            })
           })
          })
          .catch(error => console.log(error))
          .finally(()=> setIsLoading(false))
},[resetQuiz])
console.log(quizData)

// Defin updateHeld method
function updateHeld(qID,aID){
 setQuizData(prevQuizData => {
  return prevQuizData.map(question => {
   if(qID !== question.id){
    return question
   } else{
    const newAnswers = question.allAnswers.map(answer => {
     return answer.id === aID ? {...answer, isHeld: !answer.isHeld}:{...answer,isHeld:false}
    })
    return {...question,allAnswers :newAnswers}
   }
  })
 })
}

 function checkAnswers(){
  setIsShowAnswers(true)
 }
 let score=0;
 if(isShowAnswers){
  quizData.map(question => {
   return question.allAnswers.forEach(answer =>{
    return answer.isHeld && answer.isCorrect ? score++ : score;
   })
  })
 }

 function goToTop(){
  window.scrollTo({
   top:0,
   behavior:window.innerWidth>600?'auto':"smooth"
  })
 }
 function reset(){
  setIsShowAnswers(false)
  setResetQuiz(prev => prev+1)
  goToTop()
 }
const questionElements = quizData.map((question,index) => {
 return(
   <>
   <Question
   key={nanoid()}
   question = {question.question}
   allAnswers={question.allAnswers}
   qID = {question.id}
   questionIndex = {index}
   isShowAnswers = {isShowAnswers}
   updateHeld = {updateHeld}
   />
   <hr/>
   </>
  
 )
})
const buttonElements = !isShowAnswers ? 
<div >
 <button className="start-button" onClick={checkAnswers}>Check Answers</button>
</div>
:
<div>
 <p>{`You Scored ${score}/10 answers`}</p>
 <button className="start-button" onClick={reset}>Play again</button>
</div>

 return(
  <>
 <div>
   {
    isLoading 
    ?
    <div>
     <h3>One Moment Please</h3>
    </div>
    :
    <div>
     {questionElements}
     {buttonElements}
    </div>
   }
 </div>
  </>
 )
}