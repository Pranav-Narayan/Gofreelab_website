'use client'
import Link from 'next/link';
import './About.scss'
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF,FaLinkedinIn } from "react-icons/fa";

const About = () => {

  return (
    <div className="about">
        <div className='first'>
          <div className="left">
              <img src="./about.jpg" alt="" />
          </div>
          <div className="right">
              <div>
                <h1>About Us</h1>
                <p>Brightest minds in Software technologies</p>
              </div>
              <div>
                At <Link href={'/'} className='text-blue-800'>Gofreelab</Link>, we are a passionate team of innovators, problem solvers, and tech enthusiasts dedicated to transforming your ideas into high-performance digital solutions. Founded in 2016, we have become a trusted partner for companies of all sizes, helping them navigate the fast-paced world of technology and stay ahead in the digital landscape.
              </div>
              <div>
                With us you can create cutting-edge software that empowers businesses to succeed. We focus on delivering scalable, reliable, and custom solutions tailored to meet the unique needs of each client. Whether you're a startup looking to build a product from scratch or an enterprise aiming to modernize legacy systems, we're here to turn your vision into reality.
              </div>
          </div>
        </div>
        <div className='second'>
            <div className="gridbox">
                  <div className="box img_box">
                      <img src="./vission.jpg" alt="vision" />
                  </div>
                  <div className="box bg-red-300">
                      <h3>OUR VISION</h3>
                      <p>Our vision is to be a global leader in innovative software solutions, driving digital transformation that empowers businesses and enriches lives. We aspire to set industry standards by delivering cutting-edge technology, fostering creativity, and promoting sustainability.</p>
                      {/* <p>By cultivating a culture of continuous learning and excellence, we envision a world where our software shapes a more connected, efficient, and accessible future for all.</p> */}
                  </div>
                  <div className="box bg-yellow-400">
                      <h3>OUR MISSION</h3>
                      <p>Our mission is to develop high-quality, user-centric software that solves real-world challenges and adds value to our clients' operations. We strive to deliver scalable, secure, and innovative solutions by leveraging emerging technologies and best practices</p>
                      {/* <p>Committed to integrity and collaboration, we aim to build long-term relationships with our partners and clients. Our focus on continuous improvement, employee growth, and social responsibility drives us to create impactful digital experiences that inspire progress and innovation globally.</p> */}
                  </div>
                  <div className="box img_box">
                      <img src="./mission.jpg" alt="mission" />
                  </div>
            </div>
        </div>
        {/* <div className="third">
          <div className="heading">
              <div className="left">
                  <h1>Meet The Team <br />our professionals</h1>
                  <div className='line'></div>
              </div>
              <div className="right">
                  <p>Our dedicated team is the driving force behind our success. Comprising passionate professionals with diverse expertise, we work collaboratively to deliver innovative solutions, exceptional service, and impactful results. Together, we’re committed to turning your vision into reality.</p>
              </div>
          </div>
          <div className="team">
              <div className="box">
                  <img src="/employee1.png" alt="" />
                  <p>David John</p>
                  <p className='profession'>Senior Architect</p>
                  <div className="socials">
                      <FaInstagram/>
                      <FaFacebookF/>
                      <FaLinkedinIn/>
                  </div>
              </div>
              <div className="box">
                <img src="/employee2.png" alt="" />
                <p>Peter Michael</p>
                <p className='profession'>Senior Developer</p>
                <div className="socials">
                      <FaInstagram/>
                      <FaFacebookF/>
                      <FaLinkedinIn/>
                  </div>
              </div>
              <div className="box">
                <img src="/employee3.png" alt="" />
                <p>Robert langdon</p>
                <p className='profession'>Central Manager</p>
                <div className="socials">
                      <FaInstagram/>
                      <FaFacebookF/>
                      <FaLinkedinIn/>
                  </div>
              </div>
          </div>
        </div> */}
        <div className="third">
            <div className="heading">
                <h1>About our team</h1>
                <div className="line"></div>
            </div>
            <div className="team">
                <img src="/ourteam.jpg" alt="" />
                <div className="content">
                    <p>Our experienced team is the cornerstone of our software company’s success. Comprising a diverse group of highly skilled professionals, our team brings a wealth of expertise in software development, project management, and innovative problem-solving. With years of experience across various industries, we excel in designing, developing, and delivering cutting-edge software solutions tailored to meet the unique needs of our clients. Each member of our team is not only proficient in the latest technologies but also deeply committed to maintaining the highest standards of quality and customer satisfaction. By fostering a culture of collaboration and continuous learning, we ensure that our team remains ahead of industry trends, enabling us to provide forward-thinking solutions that drive business growth. Whether it's crafting custom applications, optimizing systems, or implementing scalable IT strategies, our team combines technical excellence with a passion for innovation to deliver results that exceed expectations.</p>
                    <p>Our internship team plays a vital role in fostering innovation and fresh perspectives within our software company. Composed of talented and motivated individuals, our interns bring energy, creativity, and a strong willingness to learn. Guided by experienced mentors, they are immersed in real-world projects that span software development, quality assurance, UI/UX design, data analytics, and more. This hands-on experience enables them to sharpen their technical skills while gaining a deep understanding of the software development lifecycle. Our internship program is designed to empower these aspiring professionals through collaboration, regular feedback, and opportunities to contribute meaningful work to live projects. We prioritize cultivating an environment that values curiosity, teamwork, and continuous growth, ensuring our interns not only succeed during their time with us but also build a strong foundation for their future careers. Many of our past interns have gone on to join us as full-time team members, a testament to the quality of our program and the potential we see in every intern who joins our team.</p>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default About