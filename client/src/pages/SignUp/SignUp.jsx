import React from 'react';
import axios from 'axios';
import './Signup.scss'

const URL = "http://localhost:8080/playerProfile"

const Signup = () => {

    const playerUpload = (e) => {
        // e.preventDefault();
        let player = {
            firstName: e.target.firstName.value,
            lastName: e.target.lastName.value,
            email: e.target.email.value
        }
        if(player){
            axios.post(URL + "/", {...player});
            e.target.reset();
        } else {
            alert("Please complete all fields.")
        }
    }

    return(
        <div className="site-container">
            <form className="signup-form-container" onSubmit={playerUpload} action="http://localhost:3000/locations">
                <p className="logo">KA</p>
                <h1 className="signup-form-header">Enter your details</h1>
                <input className="signup-form-input" type="text" placeholder="First name" name="firstName" required/>
                <input className="signup-form-input" type="text" placeholder="Last name" name="lastName" required/>
                <input className="signup-form-input" type="email" placeholder="Email address" name="email" required/>
                <button className="signup-form-btn btn" type="submit">Submit</button>
            </form>
        </div>
    )

}

export default Signup