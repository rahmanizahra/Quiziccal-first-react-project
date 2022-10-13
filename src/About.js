import React from "react";
export default function About(){
 return(
  <div className="modal-content">
     <article>
                <h3>What is Quizzical?</h3>
                <p>Quizzical is a web based quiz game, where you can test your trivia skills!</p>
     </article>
     
       <article>
                <h3>Who wrote these questions?</h3>
                <p>Quizzical is powered by the <a href="https://opentdb.com/">Open Trivia Database API</a>, a database of freely available questions to use for programmers.</p>
       </article>
       <article>
                <h3>Who made Quizzical?</h3>
                <p>Hi! I’m Zahra, a web developer 👋. You can check more of my work <a href="https://github.com/rahmanizahra">here</a>.</p>
       </article>
  </div>
 )
}