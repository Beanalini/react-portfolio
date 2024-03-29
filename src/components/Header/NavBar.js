import React from 'react';
import beanPic from '../../assets/images/beanalini_new.png'

const NavBar = ({ currentPage, pageChangeHandler }) => {
    return (
        <header className="custom-header navbar">
            <div className="container-fluid">
            
                <img className="navbar-brand p-2 logo" src={beanPic} alt="logo"/>
                <h1>Debra Constantinou</h1>
                <ul className='nav justify-content-end'>
                    <li className='nav-item fs-3'>

                        <a href="#About Me" onClick={() => pageChangeHandler('About Me')} 
                        className={currentPage === 'About Me' ? 'nav-link active':'nav-link'}>About</a>
                    </li>
                    <li className='nav-item fs-3'>

                        <a href="#projects" onClick={() => pageChangeHandler('Projects')} 
                        className={currentPage === 'Projects' ? 'nav-link active':'nav-link'}>Projects</a>
                    </li>   
                    <li className='nav-item fs-3'>

                        <a href="#skills" onClick={() => pageChangeHandler('Skills')} 
                        className={currentPage === 'Skills' ? 'nav-link active':'nav-link'}> Skills</a>
                    </li>   
                    
                    <li className='nav-item fs-3'>

                        <a href="#contact" onClick={() => pageChangeHandler('Contact')} 
                        className={currentPage === 'Contact' ? 'nav-link active':'nav-link'}>Contact</a>
                    </li>
                             
                </ul>
            </div>
        </header>
    );

}
export default NavBar