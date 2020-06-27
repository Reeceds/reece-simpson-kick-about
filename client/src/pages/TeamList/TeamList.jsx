import React from 'react';
import 'rc-slider/assets/index.css';
import { Link } from 'react-router-dom';
import Slider from 'rc-slider';
import axios from 'axios';
import TeamListCard from '../../components/TeamListCard/TeamListCard';
import './TeamList.scss';
import Footer from '../../components/Footer/Footer'


const URL = "http://localhost:8080/teams";

class TeamList extends React.Component {

    state = {
        teams: [],
        value: 1,
    }

    componentDidMount() {
        axios.get(URL)
        .then(res => {
            this.setState({
                teams: res.data,
            })
        })
    }

    onSliderChange = value => {
        this.setState({ value }, 
    )};
    
    setDistance = () => {
        const newDistance = this.state.value;
        axios.get(URL)
        .then(res => {
            const filteredTeams = res.data.filter(team => {
                return (team.distance <= newDistance)
            });
            this.setState({
                teams: filteredTeams,
            })
        })      
    };

    render(){
        return ( 
            <>
            <div className="site-container">
                <div className="team-list-page-description-container">
                    <h1 className="team-list-main-header">Teams</h1>
                    <h3 className="team-list-page-description">Find the nearest teams in your area that are in need of players</h3>
                </div>
                <div className="slider-container">
                    <div className="slider-distance-container">
                        <p className="slider-distance">Maximum distance</p>
                        <p className="slider-distance">{this.state.value}km</p>
                    </div>
                    <div className="slider-mechanism-container">
                        <Slider
                            min={1}
                            max={12}
                            value={this.state.value}
                            onChange={this.onSliderChange}
                        />
                    </div>
                    <button className="slider-btn btn" type="button" onClick={()=>{this.setDistance()}}>Set distance</button>
                </div>
                
                {this.state.teams.map(team => {
                    return (<Link key={team.id} to={`/teams/${team.id}`}><TeamListCard team={team} /></Link>)
                })}
                
            </div>
            <Footer />
            </>
         );
    }
    
}
 
export default TeamList;