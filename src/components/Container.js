import React, { useState } from 'react';
import NavBar from './NavBar';
import Contact from './pages/Contact.js';
import ProjectContainer from './pages/ProjectContainer.js';
import Home from './pages/Home.js';
import 'bootstrap/dist/css/bootstrap.min.css'
import './container.css'
 


export default function Container() {

    const [currentPage, setCurrentPage] = useState('Home');

    const renderPage = () => {
        if (currentPage === 'Home') {
          return <Home />;
        }
        if (currentPage === 'Contact') {
          return <Contact />;
        }
        if (currentPage === 'Projects') {
          return <ProjectContainer />;
        }
      };
      
   const  pageChangeHandler = (page) => setCurrentPage(page);

    return (
        <div className='custom-container'>
            <NavBar currentPage={currentPage} pageChangeHandler={pageChangeHandler} />
            <h1>{currentPage}</h1>
            {renderPage()}
        </div>

    );  
    
}
 
