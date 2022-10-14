import React from "react"
import './App.css';
import Home from "./Home";
import Quiz from "./Quiz";



function App() {
  const[isHome,setIsHome]=React.useState(true)

  function toggleIsHome(){
   setIsHome (prevState => !prevState)}

  return (
  <div className="App">
    {isHome 
    ? 
    <Home
     toggleIsHome={toggleIsHome} 
     />
    :
    <Quiz
    toggleIsHome={toggleIsHome} 
    />
   }
    
  </div>
  
  );
}

export default App;
