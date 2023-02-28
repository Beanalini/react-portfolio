import React from 'react';
//import '../index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faDatabase, faDisplay, faScrewdriverWrench, faListCheck} from '@fortawesome/free-solid-svg-icons';




export default function Skills() { 

    return (
        <div className="container">
            <div className="card w-75 mt-4 border-0" style={{backgroundColor:'#1F3330'}}>
                <div className="card-body">
                    <h5 className="card-title"><span> <FontAwesomeIcon icon={faDisplay} size = "2x" />  Frontend</span></h5>
                    <p className="card-text">CSS, HTML, Bootstrap, Handlebars, React & JQuery</p>
                    
                </div>
                <div className="card-body">
                    <h5 className="card-title"><span> <FontAwesomeIcon icon={faDatabase} size = "2x" />  Backend</span></h5>
                    <p className="card-text">JavaScript, NodeJS, ExpressJS, Apollo, Rest APIs, Mongo DB, Mongoose, SQL & Sequelize</p>
                    
                </div>
                <div className="card-body">
                    <h5 className="card-title"><span> <FontAwesomeIcon icon={faScrewdriverWrench} size = "2x" />  Tools</span></h5>
                    <p className="card-text">Git, GitHub, Insomnia, Heroku, Jest, MVC, PWC</p>
                    
                </div>
                <div className="card-body">
                    <h5 className="card-title"><span> <FontAwesomeIcon icon={faListCheck} size = "2x" /> Transferable</span></h5>
                    <p className="card-text">Report & Proposal writing, Project Management, Agile Methodologies, Problem solving, Analytical & numerical skills</p>
                    
                </div>
            </div>
            
            <div className="card w-75 mt-3 d-flex border-0" style={{backgroundColor:'#1F3330'}} >
                <div className="card-body">
                    <h5 className="card-title">Curriculum Vitae</h5>
                    
                    <a href="https://1drv.ms/w/s!Aq2eKil5_gn_g-ImXjn4MB5KmUkZNw?e=rTYSLy" className="btn btn-primary"> Download CV</a>
                </div>
            </div>


        </div>
        
        
       

    );  
    
}