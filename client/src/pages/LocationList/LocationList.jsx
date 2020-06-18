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
                
                {this.state.locations.map(location => {
                    return (<Link key={location.id} to={`/locations/${location.id}`}><LocationListCard location={location} /></Link>)
                })}
                
            </div>
         );
    }
    
}
 
export default LocationList;