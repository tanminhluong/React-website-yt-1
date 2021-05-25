import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button'

import './Footer.css'

function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join the Adventure newsletter to receive our best vacation deals
                </p>
                <p className="footer-subscription-text">
                    You can unsub any time
                </p>
                <div className="input-areas">
                    <form action="">
                        <input type="email" name="email" placeholder="Your Email" className="footer-input" />
                        <Button buttonStyle='btn--outline'>SUBSCRIBE</Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-links-wrapper">
                    <div className="footer-links-items">
                        <h2>About Us</h2>
                        <Link to="/">How it works</Link>
                        <Link to="/">Testinomials</Link>
                        <Link to="/">Careers</Link>
                        <Link to="/">Investors</Link>
                        <Link to="/">Terms of Service</Link>
                    </div>
                    <div className="footer-links-items">
                        <h2>About Us</h2>
                        <Link to="/">How it works</Link>
                        <Link to="/">Testinomials</Link>
                        <Link to="/">Careers</Link>
                        <Link to="/">Investors</Link>
                        <Link to="/">Terms of Service</Link>
                    </div>
                </div>
                <div className="footer-links-wrapper">
                    <div className="footer-links-items">
                        <h2>About Us</h2>
                        <Link to="/">How it works</Link>
                        <Link to="/">Testinomials</Link>
                        <Link to="/">Careers</Link>
                        <Link to="/">Investors</Link>
                        <Link to="/">Terms of Service</Link>
                    </div>
                    <div className="footer-links-items">
                        <h2>About Us</h2>
                        <Link to="/">How it works</Link>
                        <Link to="/">Testinomials</Link>
                        <Link to="/">Careers</Link>
                        <Link to="/">Investors</Link>
                        <Link to="/">Terms of Service</Link>
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrapper">
                    <div className="footer-logo">
                        <Link to='/' className="social-logo">
                            TRVL <i className="fab fa-typo3"></i>
                        </Link>
                        
                    </div>
                    
                    <small className="website-rights">LMT 2021</small>
                    
                    <div className="social-icons">
                        <Link to='/'
                            target="_blank"
                            aria-label="Facebook"
                            className="social-icon-link facebook"
                            >
                            <i className="fab fa-facebook"></i>
                        </Link>
                        <Link to='/'
                            target="_blank"
                            aria-label="Instagram"
                            className="social-icon-link instagram"
                            >
                            <i className="fab fa-instagram"></i>
                        </Link>
                        <Link to='/'
                            target="_blank"
                            aria-label="Youtube"
                            className="social-icon-link youtube"
                            >
                            <i className="fab fa-youtube"></i>
                        </Link>
                        <Link to='/'
                            target="_blank"
                            aria-label="Twitter"
                            className="social-icon-link twitter"
                            >
                            <i className="fab fa-twitter"></i>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer
