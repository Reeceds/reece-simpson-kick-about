import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import TeamListCard from '../../components/TeamListCard/TeamListCard';
import './TeamList.scss';

const URL = "http://localhost:8080/teams";

class TeamList extends React.Component {

    state = {
        teams: []
    }

    componentDidMount() {
        axios.get(URL)
        .then(res => {
            this.setState({
                teams: res.data,
            })
        })
    }

    render(){
        return ( 
            <div className="site-container">
                <div className="team-list-page-description-container">
                    <h1 className="team-list-main-header">Teams</h1>
                    <h3 className="team-list-page-description">Find the nearest teams in your area that are in need of players</h3>
                </div>
                
                {this.state.teams.map(team => {
                    return (<Link key={team.id} to={`/teams/${team.id}`}><TeamListCard team={team} /></Link>)
                })}
                
            </div>
         );
    }
    
}
 
export default TeamList;