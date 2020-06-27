import React from 'react';
import 'rc-slider/assets/index.css';
import { Link } from 'react-router-dom';
import Slider from 'rc-slider';
import axios from 'axios';
import LocationListCard from '../../components/LocationListCard/LocationListCard';
import '../LocationList/LocationList.scss';
import Footer from '../../components/Footer/Footer'


const URL = "http://localhost:8080/locations";

class LocationList extends React.Component {

    state = {
        locations: [],
        value: 1,
    }

    componentDidMount() {
        axios.get(URL)
        .then(res => {
            this.setState({
                locations: res.data,
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
            const filteredLocations = res.data.filter(location => {
                return (location.distance <= newDistance)
            });
            this.setState({
                locations: filteredLocations,
            })
        })      
    };

    render(){
        return ( 
            <>
            <div className="site-container">
                <div className="location-list-page-description-container">
                    <h1 className="location-list-main-header">Locations</h1>
                    <h3 className="location-list-page-description">Find the nearest venues that host football matches in your area</h3>
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
                
                {this.state.locations.map(location => {
                    return (<Link key={location.id} to={`/locations/${location.id}`}><LocationListCard location={location} /></Link>)
                })} 
            </div>
            <Footer />
            </>
         );
    } 
}
 
export default LocationList;