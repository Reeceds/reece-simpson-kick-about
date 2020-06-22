import React from 'react';
import axios from 'axios';
import './PlayerProfile.scss'
import Footer from '../../components/Footer/Footer'


const URL = "http://localhost:8080/playerProfile"

class PlayerProfile extends React.Component {

    state = {
        playerDetails: []
    }

    componentDidMount(){
        axios.get(URL)
        .then(res => {
            const details = res.data.find(person => person.id)
            this.setState({
                playerDetails: details
            })
        })
    }

    handleChange = () => {
        const details = this.state.playerDetails
        this.setState({ playerDetails: !details});
    }

    playerUpdate = (e) => {
        e.preventDefault();
        let updatedPlayer = {
            firstName: e.target.firstName.value,
            lastName: e.target.lastName.value,
            email: e.target.email.value
        }
        if(updatedPlayer){
            axios.put(URL, {updatedPlayer})
            .then(res => {
                alert("Details updated")
            })
        }
    }

    


    render(){
        return(
            <>
            <div className="site-container">
                <form className="player-profile-form-container" onSubmit={this.playerUpdate}>
                    <h1 className="player-profile-form-header">Update your details</h1>
                    <input className="player-profile-form-input" type="text" placeholder="First name" name="firstName" value={this.state.playerDetails.firstName} onChange={this.handleChange} required/>
                    <input className="player-profile-form-input" type="text" placeholder="Last name" name="lastName" value={this.state.playerDetails.lastName} onChange={this.handleChange} required/>
                    <input className="player-profile-form-input" type="email" placeholder="Email address" name="email" value={this.state.playerDetails.email} onChange={this.handleChange} required/>
                    <button className="player-profile-form-btn btn" type="submit">Update</button>
                </form>
            </div>
            <Footer />
            </>
        )
    }
    
}

export default PlayerProfile