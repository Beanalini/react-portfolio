import React from 'react';
import beanPic from '../assets/images/beanalini2.png'

const NavBar = ({ currentPage, pageChangeHandler }) => {
    return (
        <header className="custom-header navbar">
            <div className="container-fluid">
            
                <img className="navbar-brand p-2" src={beanPic} alt="logo" class="logo"/>
           
                <ul className='nav justify-content-end'>
                    <li className='nav-item'>

                        <a href="#home" onClick={() => pageChangeHandler('Home')} 
                        className={currentPage === 'Home' ? 'nav-link active':'nav-link'}>Home</a>
                    </li>
                    <li className='nav-item'>

                        <a href="#projects" onClick={() => pageChangeHandler('Projects')} 
                        className={currentPage === 'Projects' ? 'nav-link active':'nav-link'}>Projects</a>
                    </li>   
                    <li className='nav-item'>

                        <a href="#skills" onClick={() => pageChangeHandler('Skills')} 
                        className={currentPage === 'Skills' ? 'nav-link active':'nav-link'}> Skills</a>
                    </li>   
                    
                    <li className='nav-item'>

                        <a href="#contact" onClick={() => pageChangeHandler('Contact')} 
                        className={currentPage === 'Contact' ? 'nav-link active':'nav-link'}>Contact</a>
                    </li>
                             
                </ul>
            </div>
        </header>
    );

}
export default NavBar