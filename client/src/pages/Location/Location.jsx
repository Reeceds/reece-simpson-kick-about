import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import TeamCard from '../../components/TeamCard/TeamCard';
import './Location.scss'
import Footer from '../../components/Footer/Footer'

const URL = "http://localhost:8080/locations";

class Location extends React.Component {

    state = {
        location: [],
        teams: []
    }

    componentDidMount(){
        axios.get(URL + "/" + this.props.match.params.id)
        .then(res => {
            this.setState({
                location: res.data.location,
                teams: res.data.team
            })
        })
    }

    render() {
        return ( 
            <>
            <div className="site-container--vertical-padding">
                <div className="location-page-container">
                    <div className="location-image-container"><img className="location-image" alt="location" src={this.state.location.image}/></div>
                    <div className="location-details-container">
                        <h2 className="location-name">{this.state.location.venue}</h2>
                        <p className="location-description">{this.state.location.description}</p>
                        <p className="location-address">Address: {this.state.location.address}</p>
                        <p className="location-distance">Distance: {this.state.location.distance} km</p>
                    </div>
                    <div className="location-team-card-container">
                        <h3 className="location-teams-header">Teams playing at this location</h3>

                        {this.state.teams.map(team => {
                        return (<Link key={team.id} to={`/teams/${team.id}`}><TeamCard team={team}/></Link>)})}
                    </div>
                </div>
            </div>
            <Footer />
            </>
         );
    }
    
}
 
export default Location;