'use client'
import React, { useEffect,useRef} from 'react';
import { GoLocation } from "react-icons/go";
import { FaGlobe,FaInstagram,FaLinkedin } from "react-icons/fa";
import { FcVideoCall } from "react-icons/fc";
import { MdAddIcCall,MdEmail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";

import './Contact.scss';

const Contact = () => {

    const formRef = useRef(null)
    const iframeRef = useRef(null)

    useEffect( ()=>{
        const adjustIframeHeight = () => {
            if (formRef.current && iframeRef.current) {
              const formHeight = formRef.current.offsetHeight;
              iframeRef.current.style.height = `${formHeight}px`;
            }
          };
          adjustIframeHeight();
          window.addEventListener('resize', adjustIframeHeight);
          return () => {
            window.removeEventListener('resize', adjustIframeHeight);
          };
    },[]);


  return (
    <div className='contact'>
        <div className='top'>
            <img src="./getintouch.jpg" alt="" />
        </div>
        <h1 className='head'>Don’t Hesitate to contact with us for any
        kind of information</h1>
        <div className='row'>
            <div className='box'>
                <GoLocation className='text-3xl'/>
                <h2>Location</h2>
                <p>Chakkungal building, Chakkungal Rd, Palarivattom, Kochi, Ernakulam, Kerala 682025</p>
            </div>
            <div className='box'>
                <FaGlobe className='text-3xl'/>
                <h2>Socials</h2>
                <div className='socials'>
                    <a href="https://www.instagram.com/expertzlab.technologies/" target='_main'><FaInstagram className='text-xl'/></a>
                    <a href="https://www.linkedin.com/school/expertzlab/" target='_main'><FaLinkedin className='text-xl'/></a>
                    <a href="" target='_main'><FaXTwitter className='text-xl'/></a>
                </div>
            </div>
        </div>
        <div className='row row2'>
            <div className='box'>
                <FcVideoCall className='text-3xl'/>
                <h2>Business Enqury</h2>
                <div>
                    <p>Manager@gofreelab.com</p>
                    <p>+91 7775557775</p>
                </div>
            </div>
            <div className='box'>
                <MdAddIcCall className='text-3xl'/>
                <h2>General Enquiry</h2>
                <div>
                    <p>hr@gofreelab.com</p>
                    <p>+91 8886668886</p>
                </div>
            </div>
            <div className='box'>
                <MdEmail className='text-3xl'/>
                <h2>Internship Enquiry</h2>
                <p>contact@gofreelab.com</p>
            </div>
        </div>
        
        <div className='row3'>
            <iframe ref={iframeRef} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7858.358128803699!2d76.30252046016172!3d10.002063172895161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d1ec567b47d%3A0x83775a75e0c894e5!2sGofreelab%20Technologies!5e0!3m2!1sen!2sin!4v1727774476076!5m2!1sen!2sin"></iframe>
            <div className='form' ref={formRef}>
                <h1>Contact Us</h1>
                <div>
                    <input type="text" placeholder='Enter your name' className='text'/>
                </div>
                <div>
                    <input type="tel" placeholder='Enter your phone number' className='text'/>
                </div>
                <div>
                    <textarea placeholder='Enter Your message' className='message'/>
                </div>
                <div className='policy'>
                    <input type="checkbox"/>
                    <p>By sending an enquiry, I allow Gofreelab Technologies to contact me for more details, and consent to my data being stored as per the organization's <a href="">Privacy & Policy.</a></p>
                </div>
                <div className='btn'>
                    <button>Send message</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact

