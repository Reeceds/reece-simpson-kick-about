import React from 'react';
import './TeamCard.scss';

const TeamCard = (props) => {
    return (
        <div className="team-card-container">
            <div className="team-card-color"></div>
            <div className="team-card-details-container">
                <h2 className="team-card-team-name">{props.team.teamName}</h2>
                {/* <p className="team-card-username">{props.team.username}</p> */}
                <div className="team-card-players-time-container">
                    <p className="team-card-players-needed">Player needed: {props.team.playersNeeded}</p>
                    <p className="team-card-time">Time: {props.team.time}</p>
                </div>
            </div>
        </div>
    )
}

export default TeamCard;