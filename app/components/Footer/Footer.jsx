import React from 'react'
import './Footer.scss'

const Footer = () => {
  return (
    <div>
        <div className="footer">
            <div className="first">
                <img src="./logo.png" alt="" />
                <h1>Empowering Future Tech Innovators: Internship Opportunities in Cutting-Edge Software Development at <a href="/">Gofreelab Technologies</a></h1>
            </div>
            <div className="line"></div>
            <div>
                <h1>About us</h1>
                <ul>
                    <li>who we are</li>
                    <li>our internship</li>
                    <li>Why us</li>
                    <li>Aims</li>
                </ul>
            </div>
            <div className="line"></div>
            <div>
                <h1>Services</h1>
                <ul>
                    <li>one</li>
                    <li>Two</li>
                    <li>Three</li>
                    <li>Four</li>
                </ul>
            </div>
            <div className="line"></div>
            <div>
                <h1>Careers</h1>
                <ul>
                    <li>one</li>
                    <li>Two</li>
                    <li>Three</li>
                    <li>Four</li>
                </ul>
            </div>
            <div className="line"></div>
            <div>
                <h1>Connect Us</h1>
            </div>
        </div>
    </div>
  )
}

export default Footer
