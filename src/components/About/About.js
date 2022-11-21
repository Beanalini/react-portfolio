import React from 'react';
import './about.css'

export default function About() {
  return (
    
    

    <div className="container">

      <div className="row space-between">
        <div className="col-2 pt-2 mx-1">
          <img src="https://i.ibb.co/kqXMrWb/profile-pic.png" alt="profile-pic" border="0" className="profile-image"></img>
        </div>
        <div className="w-100"></div>
        <div className="container col-3">    
            <p className="card-text fs-5"> A full stack web developer who relishes the challenge of learning new technologies with a tenacious approach to problem solving. Having recently completed a Full Stack web development Boot Camp at the University of Birmingham, where I learnt a number of front end and back end technologies. </p> 

            <p className="card-text fs-5">An electronic engineer by training, having studied the subject at university up to postgraduate level. My subsequent career was as a research engineer in the automotive and intelligent transportation sectors, working on and managing projects ranging from electromagnetic compatibility to automotive RADAR to telematics applications. </p>

            <p className="card-text fs-5">Both my academic and professional background, coupled with the motivation to learn new technologies to continue to develop as a web developer, would make me a strong addition to any team.</p>

        </div>
    </div>
  </div>
  );
}