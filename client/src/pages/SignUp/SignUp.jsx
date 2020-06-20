import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Signup.scss'

const Signup = () => {

    return(
        <div className="site-container">
            <form className="signup-form-container" onSubmit={""}>
                <h1 className="signup-form-header">Enter your details</h1>
                <input className="signup-form-input" type="text" placeholder="First name" name="firstName" required/>
                <input className="signup-form-input" type="text" placeholder="Last name" name="lastName" required/>
                <input className="signup-form-input" type="email" placeholder="Email address" name="emailAddress" required/>
                <button className="signup-form-button" type="submit">Submit</button>
            </form>
        </div>
    )

}

export default Signup