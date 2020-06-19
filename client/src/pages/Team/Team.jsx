import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../Team/Team.scss';
import userIcon from '../../assets/icons/user-icon.svg';
import clockIcon from '../../assets/icons/time-icon.svg';
import footballIcon from '../../assets/icons/football-icon.svg';
import locationIcon from '../../assets/icons/location-icon.svg';

const URL = "http://localhost:8080/teams"

class Team extends React.Component {

    state = {
        team: [],
        venue: [],
        location: []
    }

    componentDidMount(){
        axios.get(URL + "/" + this.props.match.params.id)
        .then(res => {
            console.log(res.data)
            this.setState({
                team: res.data.team,
                venue: res.data.location[0].venue,
                location: res.data.location[0].id
            })
        })
    }

    render(){
        return (
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
                        <Link to={`/locations/${this.state.location}`}>
                            <div className="team-details-icon-container">
                                <div className="team-details-icon--center">
                                    <img alt="location icon" src={locationIcon}/>
                                </div>
                                <h4 className="team-details-location">{this.state.venue}</h4>
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
                        <form action="#">
                            <button className="btn" type="submit"><h3 className="btn-text">Request Join</h3></button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

// const Team = (props) => {

//     if(props.team){
//         return (
//             <div className="site-container">
//                 <h1 className="team-details-comment">{props.team.message}</h1>
//                 <div className="team-details-container">
//                     <div className="team-details-username-container">
//                         <h2 className="team-details-team-name">{props.team.teamName}</h2>
//                         <div className="team-details-icon-container-username">
//                             <img className="team-details-icon" alt="User icon" src={userIcon}/>
//                             <h3 className="team-details-username">{props.team.username}</h3>
//                         </div>
//                     </div>
//                     <div className="team-details-time-players-container">
//                         <div className="team-details-icon-container">
//                             <img className="team-details-icon" alt="Clock icon" src={clockIcon}/>
//                             <h4 className="team-details-time">{props.team.time}</h4>
//                         </div>
//                         <div className="team-details-icon-container">
//                             <img className="team-details-icon" alt="Football icon" src={footballIcon}/>
//                             <h4 className="team-details-players-needed">Players needed: {props.team.playersNeeded}</h4>
//                         </div>
//                         <form action="#">
//                             <button className="btn" type="submit"><h3 className="btn-text">Request Join</h3></button>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         )
//     } else {
//         return null
//     }
    
// }

export default Team;