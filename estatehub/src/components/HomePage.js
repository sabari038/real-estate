import React, { useState } from 'react';
import './HomePage.css';
import logo from '../images/Estate-Hub.png';
import RealEstateSignin from './RealEstateSignin';
import RealEstateSignup from './RealEstateSignup';

const HomePage = () => {
    const [showSignin, setShowSignin] = useState(false);
    const [showSignup, setShowSignup] = useState(false);

    const toggleSignin = () => {
        setShowSignin(!showSignin);
        setShowSignup(false); // Ensure sign-up popup is closed
    };

    const toggleSignup = () => {
        setShowSignup(!showSignup);
        setShowSignin(false); // Ensure sign-in popup is closed
    };

    return (
        <div className="homepage">
            <nav className="navbar">
                <div className="navbar-left">
                    <div className="logo"><img src={logo} alt="Logo" /></div>
                    <ul className="nav-links">
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#contact">Contact Us</a></li>
                    </ul>
                </div>
                <div className="navbar-right">
                    <button className="auth-link" onClick={toggleSignup}>Signup</button>
                    <button className="auth-link" onClick={toggleSignin}>Login</button>
                </div>
            </nav>
            <header className="hero">
                <div className="hero-content">
                    <h1>Welcome to EstateHub</h1>
                    <p>Your dream home is just a click away</p>
                    <br/>
                    <a href="#explore" className="hero-button">Explore Now</a>
                </div>
            </header>

            {/* Sign-in Pop-up */}
            {showSignin && (
                <div className="popup">
                    <div className="popup-content">
                        <button className="close-btn" onClick={toggleSignin}>X</button>
                        <RealEstateSignin toggleSignup={toggleSignup} />
                    </div>
                </div>
            )}

            {/* Sign-up Pop-up */}
            {showSignup && (
                <div className="popup">
                    <div className="popup-content">
                        <button className="close-btn" onClick={toggleSignup}>X</button>
                        <RealEstateSignup toggleSignin={toggleSignin} />
                    </div>
                </div>
            )}
        </div>
    );
}

export default HomePage;
