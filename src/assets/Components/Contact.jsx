import React from 'react';

const Contact = () => {
    return (
        <div>
            <h3>Contact</h3>
            <div>
                <label htmlFor="nameComponent">Name</label>
                <input type="text" id="nameComponent" />
                <label htmlFor="emailComponent">Email</label>
                <input type="email" id="emailComponent" />
                <label htmlFor="phoneNumberComponent">Phone</label>
                <input type="text" id="phoneNumberComponent" />
                <label htmlFor="messageComponent">Inquiry</label>
                <input type="text" id="messageComponent" />
                <button>Submit</button>
            </div>
        </div>
    );
}

export default Contact;