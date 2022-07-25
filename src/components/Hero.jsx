import React, { useState } from 'react'

const Hero = ({ open }) => {
    
    return (
        <>
            <div className="hero">
                
                <div className="hero-info">
                    <h1>Humanizing your insurance.</h1>
                    <p>Get your life insurance coverage easier and faster. We blend our expertise 
                            and technology to help you find the plan that’s right for you. Ensure you 
                        and your loved ones are protected.</p>
                    <span className="btn white">View plans</span>
                </div>
                <div className="img">
                </div>
            </div>
            <div className="right" ></div>
            <div className="left" ></div>
        </>
    )
}

export default Hero