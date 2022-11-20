import React from 'react';
import './projectCard.css'

import beanPic from '../../assets/images/city-search.png'
export default function ProjectCard({ project }) {

return (
    <div className="m-4 project-card d-flex justify-content-center align-items-center"  style={{ backgroundImage: `url(${project.img})`}}>
        <div className="card-header">


        </div>

        <div>


        </div>
       {console.log(project.img)} hello
       
        </div>

        

    );
}

<div class="card" style="width: 18rem;">
  <img src={`${project.img}`} className="card-img-top" alt="...">
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>