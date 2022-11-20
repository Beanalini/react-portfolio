import React from 'react';
import ProjectCard from './ProjectCard';
import { projectDetails } from './projectDetails';

export default function ProjectContainer() {

return (
    <div className="container">
        <div className="section-content container-fluid d-flex justify
         content center justify-content-lg-start flex-wrap">
            {projectDetails.map((project, index) => (<ProjectCard project={project} key={index}/>))}  
            
        </div>

  </div>

    );
}