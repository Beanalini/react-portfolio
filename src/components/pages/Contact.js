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
  //Error state message for form fields
  const [errorMessage, setErrorMessage] = useState('');
  //Error state message for submit
  const [submitMessage, setSubmitMessage] = useState('');

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
    if(!email||!name||!message) {
      setSubmitMessage('Please complete all forms fields before submitting')

    }
    
    console.log(email, name, message);
    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setUserName('');
    setMessage('');
    setEmail('');
    setSubmitMessage('');
    
  };
  
 
  return (
        <div className='container'>
          <div className="card m-4  w-75 align-items-center align-self-center d-flex border-0" style={{backgroundColor:"#1F3330"}}>            
            <div className="card-body" style={{backgroundColor:"#1F3330"}}>   
            <h5 className="card-title"></h5>
                    <p className="card-text fs-5">Thank you for taking the time to look through my portfolio! If you would like further information, please message me using the form below or hit the links at the bottom of the page. </p>        
                <form className="form input-group mt-3">
                <label for="contact-name" class="form-label">Name</label>
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
                    <label for="contact-email" class="form-label">Email address</label>
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
                    <label for="contact-message" class="form-label">Message</label>
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
                      <button type="button" class=" btn btn-primary" onClick={handleFormSubmit}>Submit</button>        
                 </form>
              {errorMessage && (
                <div className="mt-3">
                  <p className="error-text">{errorMessage}</p>
                </div>
              )}
              {submitMessage && (
                <div className="mt-3">
                  <p className="error-text">{submitMessage}</p>
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

