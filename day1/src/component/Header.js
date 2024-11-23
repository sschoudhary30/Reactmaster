import React from "react";

import AppLogo from '../../public/images/Applogo.jpeg';
const Header = () =>{
    return(
        <div className="header">
            <div className="logo-container">
                <img  className="logo" src={AppLogo} alt="App Logo"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>

            </div>

        </div>
    );
};

export default Header;