import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import LocationListCard from '../../components/LocationListCard/LocationListCard';
import '../LocationList/LocationList.scss';

const URL = "http://localhost:8080/locations";

class LocationList extends React.Component {

    state = {
        locations: []
    }

    componentDidMount() {
        axios.get(URL)
        .then(res => {
            this.setState({
                locations: res.data,
            })
        })
    }

    render(){
        return ( 
            <div className="site-container">
                <div className="location-list-page-description-container">
                    <h1 className="location-list-main-header">Locations</h1>
                    <h3 className="location-list-page-description">Find the nearest venues that host football matches in your area</h3>
                </div>
                
                {this.state.locations.map(location => {
                    return (<Link key={location.id} to={`/locations/${location.id}`}><LocationListCard location={location} /></Link>)
                })}
                
            </div>
         );
    }
    
}
 
export default LocationList;