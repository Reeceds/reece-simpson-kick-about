import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './PlayerProfile.scss'

const URL = "http://localhost:8080/playerProfile"

const PlayerProfile = () => {

    const playerUpdate = (e) => {
        e.preventDefault();
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
            <form className="player-profile-form-container" onSubmit={playerUpdate}>
                <h1 className="player-profile-form-header">Update your details</h1>
                <input className="player-profile-form-input" type="text" placeholder="First name" name="firstName" required/>
                <input className="player-profile-form-input" type="text" placeholder="Last name" name="lastName" required/>
                <input className="player-profile-form-input" type="email" placeholder="Email address" name="email" required/>
                <button className="player-profile-form-button" type="submit">Update</button>
            </form>
        </div>
    )
}

export default PlayerProfile