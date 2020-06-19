import React from 'react';
import '../TeamListCard/TeamListCard.scss';

const TeamListCard = (props) => {
    return (
        <div className="team-list-card-container">
            <div className="team-list-card-color"></div>
            <div className="team-list-card-details-container">
                <h2 className="team-list-card-team-list-name">{props.team.teamName}</h2>
                {/* <p className="team-list-card-username">{props.team.username}</p> */}
                <p className="team-list-card-distance">Distance: {props.team.distance}km</p>
                <div className="team-list-card-players-time-container">
                    <p className="team-list-card-players-needed">Player needed: {props.team.playersNeeded}</p>
                    <p className="team-list-card-time">Time: {props.team.time}</p>
                </div>
            </div>
        </div>
    )
}

export default TeamListCard;