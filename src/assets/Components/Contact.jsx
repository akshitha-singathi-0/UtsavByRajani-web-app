import React from 'react';

const Contact = () => {
    return (
        <div>
            <h3>Contact</h3>
            <div className='section-with-btn'>
                <label htmlFor="nameComponent">Name</label>
                <div></div>
                <input type="text" id="nameComponent" />
                <div></div>
                <label htmlFor="emailComponent">Email</label>
                <div></div>
                <input type="email" id="emailComponent" />
                <div></div>
                <label htmlFor="phoneNumberComponent">Phone</label>
                <div></div>
                <input type="text" id="phoneNumberComponent" />
                <div></div>
                <label htmlFor="messageComponent">Inquiry</label>
                <div></div>
                <input type="text" id="messageComponent" />
                <div><button>Submit</button></div>
            </div>
        </div>
    );
}

export default Contact;