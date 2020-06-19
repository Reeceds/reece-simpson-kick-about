import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {

    return(
        <div>
            <form onSubmit={""}>
                <input type="text" placeholder="First name" name="firstName"/>
                <input type="text" placeholder="Last name" name="lastName"/>
                <input type="email" placeholder="Email address" name="emailAddress"/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )

}

export default SignUp