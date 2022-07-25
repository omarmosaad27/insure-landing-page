import React from 'react'
import snappy from '../images/icon-snappy-process.png'
import affordable from '../images/icon-affordable-prices.png'
import people from '../images/icon-people-first.png'
const Features = () => {
    return (
        <div className="features">
            <span className="line"></span>
            <h2>We’re different</h2>
            <div className="cards">
                <div className="card">
                    <img src={snappy} alt="snappy" />
                    <h3>Snappy Process</h3>
                    <p>Our application process can be completed in minutes, not hours. Don’t get 
                        stuck filling in tedious forms.</p>
                </div>
                <div className="card">
                    <img src={affordable} alt="affordable" />
                    <h3>Affordable Prices</h3>
                    <p>We don’t want you worrying about high monthly costs. Our prices may be low, 
                        but we still offer the best coverage possible.</p>
                </div>
                <div className="card">
                    <img src={people} alt="people" />
                    <h3>People First</h3>
                    <p>  Our plans aren’t full of conditions and clauses to prevent payouts. We make 
                        sure you’re covered when you need it.</p>
                </div>
            </div>
        </div>
    )
}

export default Features