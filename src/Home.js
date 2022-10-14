
import React from "react"
import About from "./About"
import Modal from "./Modal"
import blueBlob from "./images/blueBlobHome.png"
import yellowBlob from "./images/yellowBlobHome.png" 
import SettingsIcons from "./SettingsIcons"

export default function Home({toggleIsHome}){
const[isModalOpen,setIsModalOpen] = React.useState(false)
function toggleModal(){
  setIsModalOpen(prev=>!prev)
}
 return(
<div>
      <Modal isOpen={isModalOpen} toggle = {toggleModal}>
        <About/>
      </Modal> 
    {/* <div className='settingsIconsHome'>
      <SettingsIcons
      toggleIsHome={toggleIsHome} 
      showHomeIcon={false}
    />
    </div> */}
  <h1 className="title">Quizzical</h1>
  <p>Check your knowledge Here!</p>
  <div className='button-holder'>
     <button onClick={toggleIsHome} className='start-button'>Play</button>
     <button onClick={toggleModal}className="home__aboutBtn">About</button>
  </div>
  <img className='yellowBlob' src={yellowBlob} alt='' />
  <img className='blueBlob' src={blueBlob} alt='' />
</div>

    
 )
}






