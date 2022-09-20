import React from "react"
import './App.css';
import Secondpage from "./Secondpage";


function App() {
  const[isClicked,setIsclicked]=React.useState(false)

  function showQuestion(){
   setIsclicked (prevState => !prevState)}

  return (
  <div className="App">
      <div className="first-page" style={{display : isClicked ? "none" : "block"}} >
        <div className='yellow-holder'>
         <img className="yellow-img"src='./2.png'></img>
        </div>
        <h1>Quizzical</h1>
        <p>Please answer all questions</p>
        <div className='button-holder'>
         <button onClick={showQuestion} className='start-button'>Start Quiz</button>
        </div>
       <img className="green-img"src='./1.png'></img>
    </div>
    
    {isClicked && <Secondpage/>}
   
      
      
  </div>
  );
}

export default App;
