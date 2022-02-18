import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';



function ContactForm() {

    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const { name, email, message } = formState;

    const [errorMessage, setErrorMessage] = useState('');


    function handleChange(e) {

        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
              setErrorMessage(`${e.target.name} is required.`);
            } else {
              setErrorMessage('');
            }
        }


        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }

        console.log('errorMessage', errorMessage);
    
    }
      
    // console.log(formState);

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }


    return(

        <section>
        <h1 data-testid="ctTag">Contact me</h1>
        <form id="contact-form" onSubmit={handleSubmit}>
            {/* // name input */}
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
            </div>
            {/* // email input */}
            <div>
                <label htmlFor="email">Email address:</label>
                <input type="email" name="email" defaultValue={name} onBlur={handleChange}/>
            </div>
            {/* // message text area */}
            <div>
                <label htmlFor="message">Message:</label>
                <textarea name="message" rows="5" defaultValue={name} onBlur={handleChange}/>
            </div>
            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}
            <button type="submit">Submit</button>
        </form>
    </section>
    )
    


}

export default ContactForm;