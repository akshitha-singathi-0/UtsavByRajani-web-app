import React, {useState} from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [stateMessage, setStateMessage] = useState(null);

    const sendEmail = (e) => {
    e.persist();
    e.preventDefault();
    setIsSubmitting(true);
    emailjs
      .sendForm(
        "service_eb19i4f",
        "template_w0hhfcj",
        e.target,
        "je9VAfS_kmTCotlTC"
      )
      .then(
        (result) => {
          setStateMessage('Message sent!');
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // hide message after 5 seconds
        },
        (error) => {
          setStateMessage('Something went wrong, please try again later');
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // hide message after 5 seconds
        }
      );
    
    // Clears the form after sending the email
    e.target.reset();
    };

    return (
        <div>
            <h1 class="pageHeader">Contact</h1>
            <form onSubmit={sendEmail}>
                <div class="form-group">
                    <label for="from_name">Name</label>
                    <input name="from_name" type="text" class="form-control" id="from_name" placeholder="Name"></input>
                </div>
                <div class="form-group">
                    <label for="email">Email address</label>
                    <input name="email" type="email" class="form-control" id="email" placeholder="abc@gmail.com"></input>
                </div>
                <div class="form-group">
                    <label for="number">Phone</label>
                    <input name="number" type="text" class="form-control" id="number" placeholder="(000)-000-0000"></input>
                </div>
                <div class="form-group">
                    <label for="message">Inquiry</label>
                    <input name="message" type="text" class="form-control" id="message"></input>
                </div>
                <input type="submit" value="Send" disabled={isSubmitting} />
                {stateMessage && <p>{stateMessage}</p>}
            </form>
        </div>
    );
}

export default Contact;