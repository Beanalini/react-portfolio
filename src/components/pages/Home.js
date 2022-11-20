import React from 'react';
import './about.css'

export default function Home() {
  return (
    
    

    <div className="container d-flex justify-content-center">

      <div className="row justify-content-around">
        <div className="col-2">
          <img src="https://i.ibb.co/kqXMrWb/profile-pic.png" alt="profile-pic" border="0" className="profile-image"></img>
        </div>
    
        <div className="card-body col-4">    
          <p> I am currently studying to become a full-stack web developer. </p>

                  <p className="card-text">I am an electronic engineer by training, having studied the subject at university up to postgraduate level. My subsequent career was as a research engineer in the automotive and intelligent transportation sectors, working and managing projects ranging from electromagnetic compatibility to automotive RADAR to telematics applications.</p>

                  <p className="card-text">After an extended career break to raise a family, I decided to retrain for a career in the IT sector by recently joining the University of Birmingham Coding Boot Camp.</p>
                  
                  <p className="card-text">Within the first few weeks of the Boot Camp course, I have learned HTML, advanced CSS, and basic JavaScript. This portfolio web site is one of my first assignments, and will form a long-term project by being developed as the course progresses to document my skills and progress.</p>

                  <p className="card-text">I consider the course to be a stepping-stone towards my new career goal, which will be achieved by hands-on learning, going into more depth on all aspects of web programming, and building a portfolio of projects.</p>
          
          <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
    </div>
  </div>
  );
}