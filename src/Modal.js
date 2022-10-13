import React from "react";
// import { X } from 'react-feather';

export default function Modal({ isOpen, toggle, children }) {
    return (
      <>
      {
       isOpen?
       <div className="modalWrapper" onClick={toggle}>
        <aside className="modal">
         <div className="modal__exitWrapper">
          <span className="modal__exit" size={30}/>X
         </div>
         {children}
        </aside>

       </div>
       :
       undefined
      }
      </>) 

    }