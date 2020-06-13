import React from 'react';
import image1 from '../../assets/images/academy-soccer.jpg'
import '../LocationCard/LocationCard.scss'

const LocationCard = () => {
    return ( 
            <div className="location-container">
                <div className="location-image-container"><img className="location-image" src={image1}/></div>
                <div className="location-details-container">
                    <h3 className="location-name">Location Name</h3>
                    <div className="location--flex-row">
                        <p className="location-distance">Distance: 9 km</p>
                        <p className="location-teams-number">Teams: 2</p>
                    </div>
                </div>
            </div>
     );
}
 
export default LocationCard;