import React from 'react';
import '../index.css';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (


          <footer className="footer fixed-bottom p-3">
            <div className="text-center">
            
                <a href="https://github.com/Beanalini" target="_blank" rel="noreferrer" title="https://github.com/Beanalini">
                            <FontAwesomeIcon icon={faGithubSquare} size = "4x" />
                        </a>
                        
                        {'  '}
                        <a href="https://github.com/Beanalini" target="_blank" rel="noreferrer" title="https://github.com/Beanalini">
                            <FontAwesomeIcon icon={faEnvelope} size = "4x" />
                        </a>
                        {'  '}
                        <a href="https://github.com/Beanalini" target="_blank" rel="noreferrer" title="https://github.com/Beanalini">
                            <FontAwesomeIcon icon={faLinkedin} size = "4x" />
                        </a>
                     </div>
                       
        
        </footer>
    









    );

    

}
export default Footer