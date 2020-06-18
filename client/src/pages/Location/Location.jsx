import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import TeamListCard from '../../components/TeamListCard/TeamListCard';
import '../Location/Location.scss'

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

        // const teams = this.state.teams;

        return ( 
            <div className="site-container--vertical-padding">
                <div className="location-page-container">
                    <div className="location-image-container"><img className="location-image" alt="location" src={this.state.location.image}/></div>
                    <div className="location-details-container">
                        <h2 className="location-name">{this.state.location.venue}</h2>
                        <p className="location-description">{this.state.location.description}</p>
                        <p className="location-distance">Distance: {this.state.location.distance} km</p>
                    </div>
                    <div className="location-team-card-container">

                    {this.state.teams.map(team => {
                        console.log(team)
                        return (<Link key={team.id} to={`/teams/${team.id}`}><TeamListCard team={team}/></Link>)})}

                    {/* {teams ? this.state.teams.map(team => {
                        console.log(team)
                        return (<Link key={team.id} to={`/teams/${team.id}`}><TeamListCard team={team}/></Link>)
                    }) : null} */}
                    </div>
                </div>
            </div>
         );
    }
    
}
 
export default Location;