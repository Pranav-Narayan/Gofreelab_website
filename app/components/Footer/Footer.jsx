import React from 'react'
import './Footer.scss'
import { FaFacebook ,FaLinkedin, FaInstagram, FaYoutube,FaGlobe} from "react-icons/fa";
import { MdPhoneInTalk } from "react-icons/md";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

const Footer = () => {
  return (
    <div className='footer'>
        <div className="top">
            <div className="col col1">
                <img src="/logo.png" alt="" />
                <p>You are welcome to Gofreelab. You can avail comprehensive digital services here from the experts. no hassles, only solutions at reasonable prices</p>
                <a href="/AboutUs"><button>About us</button></a>

            </div>
            <div className="col col2">
                <h1>Contact Us</h1>
                <div className="address connect">
                    <div><FaLocationCrosshairs className='text-xl'/></div>
                    <p>Chakkungal building, Chakkungal Rd, Palarivattom, Kochi, Ernakulam, Kerala 682025</p>
                </div>
                <div className="phn connect">
                    <MdPhoneInTalk className='text-xl'/>
                    +91 7775557775
                </div>
                <div className="mail connect">
                    <IoMail className='text-xl'/>
                    contact@gofreelab.com
                </div>
                <a href='/' className="website connect">
                    <FaGlobe className='text-xl'/>
                    www.goreelab.com
                </a>
                <div className="socials connect">
                    <div className='bg-blue-700 p-2 rounded-full'>
                        <FaFacebook className='text-2xl'/>
                    </div>
                    <div className='bg-white p-2 rounded-full'>
                        <FaInstagram className='text-2xl'/>
                    </div>
                    <div className='bg-red-600 p-2 rounded-full'>
                        <FaYoutube className='text-2xl'/>
                    </div>
                    <div className='bg-sky-600 p-2 rounded-full'>
                        <FaLinkedin className='text-2xl'/>
                    </div>
                </div>
            </div>
            <div className="links">
                <div className="col3">
                    <h1>Quick links</h1>
                    <a href="/">Home</a>
                    <a href="/AboutUs">About us</a>
                    <a href="/Internship">Internship</a>
                    <a href="/Services">Services</a>
                    <a href="/Careers">Careers</a>
                    <a href="/getintouch">Get in touch</a>
                </div>
                <div className="col4">
                    <h1>Services</h1>
                    <a href="">Software Developement</a>
                    <a href="">Website Development</a>
                    <a href="">Artificial Intelligence</a>
                    <a href="">Cloud Analytics</a>
                    <a href="">Ui/Ux designing</a>
                    <a href="">Digital Marketing</a>
                    <a href="">Hire Developers</a>
                </div>
            </div>
        </div>
        <div className="line"></div>
        <p className='cr'>copyright © 2016-2025 ,Gofreelab.com. All rights reserved</p>
    </div>
  )
}

export default Footer
