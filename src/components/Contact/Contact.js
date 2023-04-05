import React, { useRef, useState } from 'react';
import emailjs from "@emailjs/browser";

// Helper function that will check if the email is valid
import { validateEmail } from '../../utils/helpers';

function Form() {
  // Create state variables for form fields  
  const [email, setEmail] = useState('');
  const [name, setUserName] = useState('');
  const [message, setMessage] = useState('');
  //Error state message for form fields
  const [errorMessage, setErrorMessage] = useState('');
  //Error state message for submit
  const [submitMessage, setSubmitMessage] = useState('');
  const form = useRef();
  const [showModal,setShowModal] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jhc86xq",
        "template_n0stj4j",
        form.current,
        "5VAEcA8NIjaS9liyw"
      )
      .then(
        () => {         
          
          setShowModal(false);    
          
        
        },
        (error) => {
          alert("There was a problem sending your message.", error);
        }
        
      );
  };

  const handleInputChange = (e) => {
    // Getting the value and name of the input that triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    console.log(submitMessage.length);

    //if submit message exists remove from screen
   if( submitMessage.length > 0 ) setSubmitMessage('');
    
       
    // Based on the input type, we set the state of either email, name, and message
    if (inputType === 'email') {     
      console.log(email);
        const isValid = validateEmail(inputValue);
        (!isValid)?setErrorMessage('Your email address is invalid'): setErrorMessage(''); 
        setEmail(inputValue);      

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
    
    if(!email.length) console.log("no email " +email);
    if(!name.length) console.log("no name" + name);
    if(!message.length) console.log("no message" +message);
    console.log(errorMessage);
    if((!email)||(!name)||(!message)) {
      //clear any form field error messages
      setErrorMessage('');
      //Display form submission incomplete message
      setSubmitMessage('Please complete all form fields before submitting');

    } else {
      setSubmitMessage('');
      console.log(name);
      setShowModal(true)
      sendEmail(e);
      //reset state 
      setUserName('');
      setMessage('');
      setEmail('');
    

      //reset form fields
      e.target.reset();
    }
    
    console.log(email, name, message);
    
    
    
  };
  
 
  return (
        <div className='container'>
          <div className="card m-4  w-75 align-items-center align-self-center d-flex border-0" style={{backgroundColor:"#1F3330"}}>            
            <div className="card-body" style={{backgroundColor:"#1F3330"}}>   
            {/* <h5 className="card-title"></h5> */}
                    <p className="card-text fs-5">Thank you for taking the time to look through my portfolio! If you would like further information please message me using the form below, or hit the links at the bottom of the page. </p>        
                <form ref={form} onSubmit={handleFormSubmit} className="form input-group mt-3">
                <label htmlFor="contact-name" class="form-label">Name</label>
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
                    <label htmlFor="contact-email" class="form-label">Email address</label>
                    <div className="mb-3 input-group">
                    
                        <input
                          defaultValue={email}
                          name="email"
                          onBlur={handleInputChange}
                          type="text"
                          placeholder="email"
                          className="form-control"
                        />
                    </div>
                    <label htmlFor="contact-message" class="form-label">Message</label>
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
                       <button type="submit" value="send" className="btn btn-dark">Send</button>    
                      </div>
                         
                 
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
                      </form>
                      {showModal && (
                        <div className="modal fade show d-block" tabIndex={-1}>
                          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                            <div className="modal-content bg-black border border-dark">
                              <div className="modal-body text-center py-4">
                                <p>Thank you for your message {name}. I'll get back to you as soon as possible.</p>                                
                                <button type="button" onClick={() => setShowModal(false)} className="btn btn-dark px-5" data-dismiss="modal">Close</button>
                              </div>
                            </div>
                          </div>
                        </div>
        )}
          </div>
       </div>
      </div>
  );
}

export default Form;

