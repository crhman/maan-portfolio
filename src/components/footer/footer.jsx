import React from 'react';
import './footer.css';
import logo from '../../assets/logo.svg'; // Assuming you have a logo image
import user_icon from '../../assets/user_icon.svg'; // Assuming you have a logo image
const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-top">
                <div className="footer-top-left">
                <img src={logo} alt="" />
                <p>i'm frontend devloper, from usa with 10 year experience</p>
                </div>
                <div className="footer-top-right">
                    <div className="footer-email-input">
                        <img src={user_icon} alt="" />
                        <input type="email" placeholder='enter your email' />
                    </div>
                    <button className='footer-btn'>Subscribe</button>
                </div>
            </div> 
            <hr /> 
            <div className="footer-bottom"> 
                  <div className="footer-bottom-left"> 
                    <p>© 2023 All rights reserved | Designed by <a href="">Abdirahman</a></p>
                  </div>
                <div className="footer-bottom-right">
                    <p>term of services</p>
                    <p>privicy polyciy</p>
                    <p>connect with me</p>
                </div>
                
            </div>
        </div>
    );
}

export default Footer;
