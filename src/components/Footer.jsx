import React from 'react'
import logo from '../images/logo.png'
import facebook from '../images/icon-facebook.png'
import twitter from '../images/icon-twitter.png'
import pinterest from '../images/icon-pinterest.png'
import instagram from '../images/icon-instagram.png'
const Footer = () => {
    return (
        <div className="footer">
            <div className="social">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="social-links">
                    <img src={facebook} alt="facebook" />
                    <img src={twitter} alt="twitter" />
                    <img src={pinterest} alt="pinterest" />
                    <img src={instagram} alt="instagram" />
                </div>
            </div>
            <div className="links">
                <div className="group">
                    <h3>our company</h3>
                    <a href="/howwork">how we work</a>
                    <a href="/howwork">why insure?</a>
                    <a href="/howwork">view plans</a>
                    <a href="/howwork">reviews</a>
                </div>
                <div className="group">
                    <h3>help me</h3>
                    <a href="/howwork">faq</a>
                    <a href="/howwork">terms of use</a>
                    <a href="/howwork">privacy poilcy</a>
                    <a href="/howwork">cookies</a>
                </div>
                <div className="group">
                    <h3>contact</h3>
                    <a href="/howwork">sales</a>
                    <a href="/howwork">support</a>
                    <a href="/howwork">live chat</a>
                </div>
                <div className="group">
                    <h3>others</h3>
                    <a href="/howwork">careers</a>
                    <a href="/howwork">press</a>
                    <a href="/howwork">Licenses</a>
                </div>
            </div>
        </div>
    )
}

export default Footer