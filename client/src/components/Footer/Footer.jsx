import React from 'react';
import '../Footer/Footer.scss';
import messagesIcon from '../../assets/icons/message-icon.png';
import venuesIcon from '../../assets/icons/football-icon.png';
import userIcon from '../../assets/icons/avatar-icon.png';


const Footer = () => {
    return (
        <footer className="footer-container">
            <li><img className="footer-icon" alt="messages" src={messagesIcon}/></li>
            <li><img className="footer-icon footer-football" alt="venues" src={venuesIcon}/></li>
            <li><img className="footer-icon" alt="user" src={userIcon}/></li>
        </footer>
    );
}
 
export default Footer;