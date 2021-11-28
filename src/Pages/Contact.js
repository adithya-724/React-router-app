import React from 'react'
import '../App.css';

function Contact() {
  return (
<div className="container">
    <form>
        <h2>Please fill in the form ! </h2>
        <div>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="adithya" />
        </div>
        <div>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
        </div>
        <div>
            <label htmlFor="phone">Mobile</label>
            <input type="number" id="phone" placeholder="9003648613" />
        </div>
        <div>
            <label htmlFor="email">Mail</label>
            <input type="email" id='email' placeholder="adithya2@gmail.com" />
        </div>
        <div>
         <button type='button'>Submit</button>
        </div>

    </form>
    </div>
  );
}

export default Contact;
