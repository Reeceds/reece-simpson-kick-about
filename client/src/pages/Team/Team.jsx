import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Team.scss';
import userIcon from '../../assets/icons/user-icon.svg';
import clockIcon from '../../assets/icons/time-icon.svg';
import footballIcon from '../../assets/icons/football-icon.svg';
import locationIcon from '../../assets/icons/location-icon.svg';
import Footer from '../../components/Footer/Footer'


const URL = "http://localhost:8080/teams"

class Team extends React.Component {

    state = {
        team: [],
        location: [],
        pendingRequest: false,
        showBtn: true
    }

    componentDidMount(){
        axios.get(URL + "/" + this.props.match.params.id)
        .then(res => {
            const location = res.data.location.find(place => place.id)
            this.setState({
                team: res.data.team,
                location: location,
            })
        })
    }

    handleClick() {
        const pendingRequest = this.state.pendingRequest
        const showBtn = this.state.showBtn
        this.setState({
            pendingRequest: !pendingRequest,
            showBtn: !showBtn
        })
        console.log("this is working")
    }

    render(){
        return (
            <>
            <div className="site-container">
                <h1 className="team-details-comment">" {this.state.team.message} "</h1>
                <div className="team-details-container">
                    <div className="team-details-username-container">
                        <h2 className="team-details-team-name">{this.state.team.teamName}</h2>
                        <div className="team-details-icon-container-username">
                            <img className="team-details-icon" alt="User icon" src={userIcon}/>
                            <h3 className="team-details-username">{this.state.team.username}</h3>
                        </div>
                    </div>
                    <div className="team-details-time-players-container">
                        <Link to={`/locations/${this.state.location.id}`}>
                            <div className="team-details-icon-container">
                                <div className="team-details-icon--center">
                                    <img alt="location icon" src={locationIcon}/>
                                </div>
                                <h4 className="team-details-location">{this.state.location.venue}</h4>
                            </div>
                        </ Link>

                        <div className="team-details-icon-container">
                            <img className="team-details-icon" alt="Clock icon" src={clockIcon}/>
                            <h4 className="team-details-time">{this.state.team.time}</h4>
                        </div>
                        <div className="team-details-icon-container">
                            <img className="team-details-icon" alt="Football icon" src={footballIcon}/>
                            <h4 className="team-details-players-needed">Players needed: {this.state.team.playersNeeded}</h4>
                        </div>
                        <button className={`team-details-btn btn ${this.state.showBtn ? "show" : "hide"}`} onClick={()=>{this.handleClick()}}>Request Join</button>
                    </div>
                </div>
                <div className={`request-container ${this.state.pendingRequest ? "show" : "hide"}`}>
                    <div className="request-color"></div>
                    <h3 className="request-text">Your request is pending</h3>
                </div>
            </div>
            <Footer />
            </>
        )
    }
}

export default Team;