import React from 'react';
import { Link } from 'react-router-dom';

import '../Footer/Footer.scss';
import messagesIcon from '../../assets/icons/message-icon.svg';
import locatoinIcon from '../../assets/icons/location-icon.svg';
import userIcon from '../../assets/icons/avatar-icon.svg';
import teams from '../../assets/icons/teams-icon.svg';


const Footer = () => {
    return (
        <footer className="footer-container">
            
            <Link to="/locations"><li><img className="footer-icon-locations" alt="venues" src={locatoinIcon}/></li></ Link>
            <Link to="/teams"><li><img className="footer-icon-teams" alt="teams" src={teams}/></li></ Link>
            <li><img className="footer-icon-messages" alt="messages" src={messagesIcon}/></li>
            <li><img className="footer-icon-user" alt="user" src={userIcon}/></li>
        </footer>
    );
}
 
export default Footer;