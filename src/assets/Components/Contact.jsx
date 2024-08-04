import React from 'react';

const Contact = () => {
    return (
        <div>
            <h1 class="pageHeader">Contact</h1>
            <form>
                <div class="form-group">
                    <label for="inputName">Name</label>
                    <input type="text" class="form-control" id="inputName" placeholder="Name"></input>
                </div>
                <div class="form-group">
                    <label for="inputEmail">Email address</label>
                    <input type="email" class="form-control" id="inputEmail" placeholder="abc@gmail.com"></input>
                </div>
                <div class="form-group">
                    <label for="inputPhoneNumber">Phone</label>
                    <input type="text" class="form-control" id="inputPhoneNumber" placeholder="(000)-000-0000"></input>
                </div>
                <div class="form-group">
                    <label for="inputInquiry">Inquiry</label>
                    <input type="text" class="form-control" id="inputInquiry"></input>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Contact;