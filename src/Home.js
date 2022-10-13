
import React from "react"
import About from "./About"
import Modal from "./Modal"

export default function Home({toggleIsHome}){
const[isModalOpen,setIsModalOpen] = React.useState(false)
function toggleModal(){
  setIsModalOpen(prev=>!prev)
}
 return(
<div  >
      <Modal isOpen={isModalOpen} toggle = {toggleModal}>
        <About/>
      </Modal> 
  <h1 className="title">Quizzical</h1>
  <p>Check your knowledge Here!</p>
  <div className='button-holder'>
     <button onClick={toggleIsHome} className='start-button'>Start Quiz</button>
     <button onClick={toggleModal}className="home__aboutBtn">About</button>
  </div>
       
</div>
    
    
 )
}






