'use client'
import React from 'react'
import NavLink from './Navlink';
import './Navbar.scss'
import '/app/styles/responsive.scss';
import { motion } from 'framer-motion';
const links = [
    {url:'/',title:'Home'},
    {url:'/AboutUs',title:'About Us'},
    {url:'/Services',title:'Services'},
    {url:'/Careers',title:'Careers'},
  ];

const Navbar = () => {

  return (
    <nav>
        {/* ---------- LOGO ---------- */}
        <img src="../logo.png" alt="" className='logo'/>

        {/* -------- NAVLINKS -------- */}
        <div className="navlinks">
          {links.map((link)=>(
                  <NavLink link={link} key={link.title}/>
              ))}
          <motion.button
            whileHover={{scale:1.05}}
            transition={{type:'spring',stiffness:400,damping:10}}>
              <NavLink link={{url:'/getintouch',title:'Get In Touch'}} key={'Get In Touch'}/>
          </motion.button>
        </div>

         {/* ---------- RESPONSIVE ICON-------- */}
              <div className="res_bar">
                  <div className="bar"></div>
                  <div className="bar"></div>
                  <div className="bar"></div>
              </div>
        
    </nav>
  )
}

export default Navbar
