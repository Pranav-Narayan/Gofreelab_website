import React from 'react'
import './Jobs.scss'
import { FaArrowUpRightFromSquare,FaRegClock } from "react-icons/fa6";

const openings=[
  {
    id:1,
    titile:"Front-end Developer",
    description:"Looking for a Front-end developer in our team",
    info:'full-time',
    apply_link:""
  },
  {
    id:2,
    titile:"Full-Stack Developer Python",
    description:"Looking for a mid-level Python developer in our team",
    info:'full-time',
    apply_link:""
  },
  {
    id:3,
    titile:"Full-Stack Developer Java",
    description:"Looking for a beginer-level Python developer in our team",
    info:'full-time',
    apply_link:""
  },
  {
    id:4,
    titile:"Full-Stack Developer Javascript",
    description:"Looking for a mid-level Javascript developer in our team",
    info:'full-time',
    apply_link:""
  },
  {
    id:5,
    titile:"Big data analyst",
    description:"Looking for a mid-level Big data analyst in our team",
    info:'full-time',
    apply_link:""
  },
  {
    id:6,
    titile:"Internship in python",
    description:"Looking for a beginner-level python intern in our team",
    info:'internship',
    apply_link:""
  },
  {
    id:7,
    titile:"Internship in javascript",
    description:"Looking for a beginner-level javascript intern in our team",
    info:'internship',
    apply_link:""
  }
]

const Jobs = () => {
  return (
    <div className='jobs'>
        <div className="top">
            <span>We're hiring!</span>
            <h1>Be part of our mission</h1>
            <p>We're looking for passionate people to join on our mission. We value flat hierarchies, clear communication, and full ownership and responsibility.</p>
            <div className="options">
                <button className='active'>Viewall</button>
                <button>Development</button>
                <button>Marketing</button>
                <button>Management</button>
                <button>Datascience</button>
                <button>Analytics</button>
            </div>
            <div className="line"></div>
        </div>
        {openings.map((value)=>(
                <div key={value.id} className="openings">
                  <div className='jobs'>
                    <div className="left">
                        <h1>{value.titile}</h1>
                        <p>{value.description}</p>
                        <button>{value.info}<FaRegClock /></button>
                    </div>
                    <div className="right">
                        <a href="">Apply now</a>
                        <FaArrowUpRightFromSquare />
                    </div>
                  </div>
                  <div className="line"></div>
                </div>
        ))}
        <div className="form">
          <h1>Come Join With Us</h1>
          <p>Drop us a line and our team will get you ASAP..</p>
          <form action="">
              <div className="value">
                  <label htmlFor="">Name*</label>
                  <input type="text" />
              </div>
              <div className="value">
                  <label htmlFor="">Email*</label>
                  <input type="Email" />
              </div>
              <div className="value">
                  <label htmlFor="">Phone No*</label>
                  <input type="phone" />
              </div>
              <div className="value">
                  <label htmlFor="">Qualification*</label>
                  <input type="text" />
              </div>
              <div className="value">
                  <label htmlFor="">Job Profile*</label>
                  <input type="text" />
              </div>
              <div className="value">
                  <label htmlFor="">Total Experience(use 0 if you are fresher)*</label>
                  <input type="number" />
              </div>
              <div className="value">
                  <label htmlFor="">Relevent Experience(use 0 if you are fresher)*</label>
                  <input type="number" />
              </div>
              <div className="value">
                  <label htmlFor="">Any career gaps?</label>
                  <input type="text" />
              </div>
              <div className="value">
                  <label htmlFor="">Reason for career gaps</label>
                  <textarea placeholder='Enter Your message' className='message'/>
              </div>
              <div className="value">
                  <label htmlFor="">Current Salary</label>
                  <input type="number" />
              </div>
              <div className="value">
                  <label htmlFor="">Expected Salary</label>
                  <input type="number" />
              </div>
              <div className="value">
                  <label htmlFor="">Reason for Job change</label>
                  <textarea placeholder='Enter Your message' className='message'/>
              </div>
              <div className="value">
                  <label htmlFor="">Attach your resume</label>
                  <input type="file" />
              </div>
              <div className="value">
                  <label htmlFor="">Why should we hire you?</label>
                  <textarea placeholder='Enter Your message' className='message'/>
              </div>
          </form>
          <button type='submit'>Submit</button>
        </div>   
    </div>
  )
}

export default Jobs
