import React from 'react';
import './RealEstateSignup.css'; // Make sure to create this CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import signup from './signup-image.jpg';
const RealEstateSignup = () => {
    return (
            <div className="whole">
                <div className="signup-content">
                    <div className="signup-form">
                        <h2 className="form-title">Sign up</h2>
                        <form method="POST" className="register-form" id="register-form">
                            <div className="form-group">
                                <FontAwesomeIcon icon={faUser} className="fa" />
                                <input type="text" name="name" id="name" placeholder="Your Name" />
                            </div>
                            <div className="form-group">
                                <FontAwesomeIcon icon={faEnvelope} className="fa" />
                                <input type="email" name="email" id="email" placeholder="Your Email" />
                            </div>
                            <div className="form-group">
                                <FontAwesomeIcon icon={faLock} className="fa" />
                                <input type="password" name="pass" id="pass" placeholder="Password" />
                            </div>
                            <div className="form-group">
                                <FontAwesomeIcon icon={faLock} className="fa" />
                                <input type="password" name="re_pass" id="re_pass" placeholder="Repeat your password" />
                            </div>
                            <div className="form-group">
                                <input type="checkbox" name="agree-term" id="agree-term" className="agree-term" />
                                <label htmlFor="agree-term" className="label-agree-term">
                                    <span />I agree to all statements in 
                                    <a href="#" className="term-service"><span />Terms of service</a>
                                </label>
                            </div>
                            <div className="form-group form-button">
                                <input type="submit" name="signup" id="signup" className="form-submit" value="Register" />
                            </div>
                        </form>
                    </div>
                    <div className="signup-image">
                        <figure><img src={signup} alt="sign up" /></figure>
                        <a href="#" className="signup-image-link">I am already a member</a>
                    </div>
                </div>
            </div>
    );
}

export default RealEstateSignup;