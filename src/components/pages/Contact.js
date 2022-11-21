import React, { useState } from 'react';
//import './style.css';

// Here we import a helper function that will check if the email is valid
import { validateEmail } from '../../utils/helpers';

function Form() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState('');
  const [name, setUserName] = useState('');
  const [message, setMessage] = useState('');

  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;
    console.log(e);
    console.log(e.target.name);
    console.log(e.target.value);
    console.log(inputType);
    console.log(inputValue);
    // Based on the input type, we set the state of either email, username, and password
    if (inputType === 'email') {     
        const isValid = validateEmail(inputValue);
        (!isValid)?setErrorMessage('Your email address is invalid'): setErrorMessage('');       

      }else if (inputType === 'name') {
       (!inputValue.length)? setErrorMessage(`Please enter your ${inputType}.`): setErrorMessage('');
      setUserName(inputValue);
    } else {
      (!inputValue.length)? setErrorMessage(`Please add a ${inputType}.`): setErrorMessage('');
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();
    console.log(errorMessage);
    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    // if(!errorMessage) {
    //  alert(`Hello ${userName}`);
    // }
    
    console.log(email, name, message);
    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setUserName('');
    setMessage('');
    setEmail('');
    console.log(email, name, message);
  };
  
 
  return (
        <div className='container'>
          <div className="card m-4  w-75 align-items-center align-self-center d-flex border-0" style={{backgroundColor:"#1F3330"}}>            
            <div className="card-body" style={{backgroundColor:"#1F3330"}}>   
            <h5 className="card-title"></h5>
                    <p className="card-text">Thank you for taking the time to look through my portfolio! If you would like further information, please message me using the contact form or hit the links below. </p>        
                <form className="form input-group mt-3">
                    <div className="mb-3 input-group">
                      <input
                      defaultValue={name}
                      name="name"
                      onBlur={handleInputChange}                   
                      type="text"
                      placeholder="Enter your name"
                      className="form-control"
                    />
                    </div>
        
                    <div className="mb-3 input-group">
                        <input
                          defaultValue={email}
                          name="email"
                          onBlur={handleInputChange}
                          type="email"
                          placeholder="email"
                          className="form-control"
                        />
                    </div>
          
                    <div className ="mb-3 input-group">
                      <textarea
                        defaultValue={message}
                        name="message"
                        onBlur={handleInputChange}
                        type="text"
                        placeholder="Add a message"
                        rows="10"
                        className="form-control"
                      />
                      </div>        
                 </form>
              {errorMessage && (
                <div>
                  <p className="error-text">{errorMessage}</p>
                </div>
              )}
          </div>
       </div>
      </div>
  );
}

export default Form;
// if(!inputValue.length){
//   setErrorMessage('Please enter an email address');

// }else{

