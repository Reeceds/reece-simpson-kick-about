import React from 'react';
import '../LocationListCard/LocationListCard.scss'

const LocationCard = (props) => {
    return ( 
        <div className="location-card-container">
            <div className="location-card-image-container"><img className="location-card-image" alt="location" src={props.location.image}/></div>
            <div className="location-card-details-container">
                <h2 className="location-card-name">{props.location.venue}</h2>
                <div className="location-card--flex-row">
                    <p className="location-card-distance">Distance: {props.location.distance}km</p>
                    <p className="location-card-teams-number">Teams: {props.location.numTeams}</p>
                </div>
            </div>
        </div>
    );
}
 
export default LocationCard;