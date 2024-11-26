import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import AppLogo from '../../public/images/Applogo.jpeg';
const Header = () =>{
    
    // never create useState outside component and create at top inside inside functional component.
    // never create hook inside if else loop. it will create inconsistency.
    const [btnNameReact, setbtnNameReact ] = useState("login");

    // If no dependency array => useEffect is called on every rendering(basic nauture).
    // If dependency array is empty = [] => useEffect is called on initial render(just once).
    // If dependency array is [dependency] => called everytime dependency is updated.
    useEffect(() => {

    },[])
    return(
        <div className="header">
            <div className="logo-container">
                <img  className="logo" src={AppLogo} alt="App Logo"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li>Cart</li>
                    <button className="login-btn" onClick={() => {
                        btnNameReact === "Login" 
                        ? setbtnNameReact("Logout") 
                        : setbtnNameReact("Login");
                        }}>
                    {btnNameReact}
                    </button>
                </ul>

            </div>

        </div>
    );
};

export default Header;