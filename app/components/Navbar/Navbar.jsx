'use client';
import React, { useState,useEffect } from 'react';
import './Navbar.scss';
import '/app/styles/responsive.scss';
import { motion } from 'framer-motion';
import { FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa6';
import { usePathname } from 'next/navigation';

const links = [
  { url: '/', title: 'Home' },
  { url: '/AboutUs', title: 'About Us' },
  { url: '/Internship', title: 'Internship' },
  { url: '/Services', title: 'Services' },
  { url: '/Blogs', title: 'Blogs' },
  { url: '/Careers', title: 'Careers' },
];

const Navbar = () => {
  const [open, setOpen] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [sticky,setSticky] = useState(false)
  const pathname = usePathname()
  const isInternshipPage = pathname === '/Internship';
  const isBlogsPage = pathname === '/Blogs';

  const toggleNavbar = () => {
    setOpen(!open);
  };

  useEffect( ()=>{
    window.addEventListener('scroll',()=>{
        window.scrollY>=50 ? setSticky(true) : setSticky(false)
    })
  },[])
  

  return (
    <div className={`navbar ${isInternshipPage | isBlogsPage && !sticky ? 'transparent' : 'white'}`}>
      <div className="topbar">
        <p>contact@Gofreelab.com</p>
        <div className="icons">
          <FaInstagram className="text-xl" />
          <FaFacebookF className="text-xl" />
          <FaLinkedinIn className="text-xl" />
        </div>
      </div>

      <nav
        // onMouseLeave={() => setDropdownOpen(false)}
      >
        <a href="/">
          <img src="../logo.png" alt="Logo" className="logo" />
        </a>

        <div className="navlinks" >
          {links.map((link, index) => (
            <div key={index}
            onMouseEnter={() => link.title === 'Services' && setDropdownOpen(true)}>
                <a
                  href={link.url}>
                  {link.title}
                </a>
            </div>
          ))}
          <a href="./getintouch" className="getintouch_btn">
            Get In Touch
          </a>
        </div>

        <div className="res_bar" onClick={toggleNavbar}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </nav>

      {dropdownOpen && (
        <motion.div
          className="dropdown"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          onMouseEnter={() =>setDropdownOpen(true)}
          onMouseLeave={() =>setDropdownOpen(false)}
        >
          <ul
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)} className='droplinks'>
            <a href="/Services/Softwaredevelopment"><li>Software Development</li></a>
            <a href="/Services"><li>Web Development</li></a>
            <a href="/Services"><li>Artificial Intelligence</li></a>
            <a href="/Services"><li>Cloud Analytics</li></a>
            <a href="/Services"><li>Ui/Ux Designing</li></a>
            <a href="/Services"><li>Digital Marketing</li></a>
            <a href="/Services"><li>Hire Developers</li></a>
          </ul>
        </motion.div>
      )}

      <div className={`resp_navlinks ${open ? '' : 'show'}`}>
        {links.map((link) => (
          <a key={link.title} href={link.url}>
            {link.title}
          </a>
        ))}
        <a href="./getintouch" className="getintouch_btn">
          Get In Touch
        </a>
      </div>
    </div>
  );
};

export default Navbar;
