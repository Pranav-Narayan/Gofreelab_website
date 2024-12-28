import React from 'react'
import './Internship.scss'

const benefits = [
    {
        id:1,
        image:'/Certificate.png',
        heading:'Program Certificate',
        desc:"Recognizing your achievement with our official program certificate, a testament to your dedication and expertise."
    },
    {
        id:2,
        image:'/project.png',
        heading:'Real Project Challenge',
        desc:"Empowers to tackle real-world problems, innovation, collaboration and practical skill development."
    },
    {
        id:3,
        image:'/corporate.png',
        heading:'Corporate Culture',
        desc:"Fosters innovation, collaboration, and integrity, empowering employees to thrive and deliver exceptional value."
    },
    {
        id:4,
        image:'/Experience.png',
        heading:'Experience with Experts',
        desc:"Gain unparalleled insights and solutions through our seamless collaboration with industry experts."
    },
    {
        id:5,
        image:'/Allowance.png',
        heading:'Stipend work',
        desc:"We streamlines the process of allocation, tracking, and disbursement for seamless financial support."
    }, 
    {
        id:6,
        image:'/final.png',
        heading:'Final assignment Project',
        desc:"This project focuses and showcasing our skills and understanding of the subject."
    },
]

const Internship = () => {
  return (
    <div className='internship'>
        <div className="first">
            <div className="left">
                <h1>Gofreelab Internship</h1>
                <div className="contents">
                    <p>we believe in empowering the next generation of tech leaders by providing hands-on experience, mentorship, and opportunities to solve real-world challenges. Our internship program is designed to immerse you in a collaborative and innovative environment where you’ll work alongside industry professionals, develop cutting-edge solutions, and enhance your technical and professional skills.</p>
                    <p>Join us and take the first step towards building an exciting career in technology. Let’s innovate, learn, and grow together!</p>
                </div>
                <a href="" className='button'>Join Us</a>
            </div>
            <div className="right">
                <img src="/internship_intro.png" alt="internship" />
            </div>
        </div>
        <div className="second">
            <h1 className='text-center'>benefits of Internship..!</h1>
            <div className="benefits">
                {benefits.map((value)=>(
                    <div key={value.id} className='col'>
                        <img src={value.image} alt="" />
                        <div className='contentbox'>
                            <h2>{value.heading}</h2>
                            <p>{value.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <div className="third">
            <div className="bg"></div>
            <h1 className='text-white'>Internship Journey</h1>
            <div className="properties">
                <div className="box">
                    <h2>01</h2>
                    <div className="imgbox"><img src="/registration.png" alt="" /></div>
                    <h3>Registration</h3>
                    <p>Our team will Register your name for internship if u are applied.</p>
                </div>
                <div className="box">
                    <h2>02</h2>
                    <div className="imgbox"><img src="/team-business.png" alt="" /></div>
                    <h3>Administration</h3>
                    <p>If u are qualified in criterias,You are on Administration team</p>
                </div>
                <div className="box">
                    <h2>03</h2>
                    <div className="imgbox"><img src="/interview.png" alt="" /></div>
                    <h3>Interview</h3>
                    <p>You will go through a Interview stage held by our senior developers</p>
                </div>
                <div className="box">
                    <h2>04</h2>
                    <div className='imgbox'><img src="/conversation.png" alt="" /></div>
                    <h3>On job</h3>
                    <p>You get assigned to different project based on your performance</p>
                </div>
                <div className="box">
                    <h2>05</h2>
                    <div className="imgbox"><img src="/certificate.png" alt="" /></div>
                    <h3>Internship</h3>
                    <p>On complete successful internship, you get certificate from gofreelab</p>
                </div>
            </div>
        </div>
        <div className="fourth">
            <h1>Video Archive</h1>
            <div className='video'>
                <video controls width="600">
                    <source src="/internship.mp4"/>
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    </div>
  )
}

export default Internship
