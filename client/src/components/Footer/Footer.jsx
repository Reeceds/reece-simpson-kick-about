import React from 'react';
import { Link } from 'react-router-dom';

import '../Footer/Footer.scss';
import messagesIcon from '../../assets/icons/message-icon.svg';
import locatoinIcon from '../../assets/icons/location-icon.svg';
import userIcon from '../../assets/icons/avatar-icon.svg';


const Footer = () => {
    return (
        <footer className="footer-container">
            <li><img className="footer-icon" alt="messages" src={messagesIcon}/></li>
            <Link to="/locations"><li><img className="footer-icon" alt="venues" src={locatoinIcon}/></li></ Link>
            <li><img className="footer-icon" alt="user" src={userIcon}/></li>
        </footer>
    );
}
 
export default Footer;