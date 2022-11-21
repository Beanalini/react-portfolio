import React from 'react';
import './projectCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons'


export default function ProjectCard({ project }) {

return (
        <div className="m-4 project-card d-flex justify-content-center align-items-center"  style={{ backgroundImage: `url(${project.img})`}}>
            

            <div className="p-3 info  justify-content-center text-center align-items-center">
            
                <h3 className="project-title">{project.title}</h3>  
                <a href={project.repo} style={{color:'Black'}} className="card-link" target="_blank" rel="noreferrer" title={project.repo}> 
                    <FontAwesomeIcon icon={faGithub} size = "1x" />
                </a>       
                {' '}
                <a href={project.repo} style={{color:'Black'}} className="card-link test" target="_blank" rel="noreferrer" title={project.repo}> 
                    <FontAwesomeIcon icon={faLink} size = "1x" />
                </a> 
                            

            </div>
        
        </div>
    );
}