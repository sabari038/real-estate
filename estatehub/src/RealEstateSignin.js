import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faGoogle } from '@fortawesome/free-brands-svg-icons';
import './RealEstateSignin.css';
import signin from './signin-image.jpg';
const RealEstateSignin = () => {
    return (
        <section className="signup">
            <div className="container">
                <div className="signup-content">
                    <div className="signup-image">
                        <figure><img src={signin} alt="sign up" /></figure>
                        <a href="#" className="signup-image-link">Create an account</a>
                    </div>
                    <div className="signup-form">
                        <h2 className="form-title">Sign up</h2>
                        <form method="POST" className="register-form" id="register-form">
                            <div className="form-group">
                                <FontAwesomeIcon icon={faUser} className="fa" />
                                <input type="text" name="name" id="name" placeholder="Your Name" />
                            </div>
                            <div className="form-group">
                                <FontAwesomeIcon icon={faLock} className="fa" />
                                <input type="password" name="pass" id="pass" placeholder="Password" />
                            </div>
                            <div className="form-group">
                                <input type="checkbox" name="remember-me" id="remember-me" className="agree-term" />
                                <label htmlFor="remember-me" className="label-agree-term"><span><span></span></span>Remember me</label>
                            </div>
                            <div className="form-group form-button">
                                <input type="submit" name="signup" id="signup" className="form-submit" value="Log in" />
                            </div>
                            <div className="social-login">
                                <p>Or login with</p>
                                <a href="#" className="social-link"><FontAwesomeIcon icon={faFacebook} /></a>
                                <a href="#" className="social-link"><FontAwesomeIcon icon={faTwitter} /></a>
                                <a href="#" className="social-link"><FontAwesomeIcon icon={faGoogle} /></a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default RealEstateSignin;