'use client'
import React, { useState,useEffect,useRef } from 'react'
import './Hero.scss'
import Link from 'next/link';
import { HiViewGridAdd } from "react-icons/hi";
import { FaParachuteBox } from "react-icons/fa";
import { RiExchange2Fill } from "react-icons/ri";
import { TfiThought } from "react-icons/tfi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { data } from '@/app/Data/gofreelab';
import { img_links } from '@/app/Data/logos';
import { services } from '@/app/Data/services';
import { motion, AnimatePresence,useInView } from 'framer-motion';
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

const headings = [
  {
    title:'Build your application',
    description:"We refers to the process of developing, testing, and deploying software tailored to meet specific needs or solve particular problems. It involves multiple stages, including planning, designing, coding, testing, and maintenance. During this process, developers create the application's structure, implement features, and ensure its performance and usability. Building an application can be done using various programming languages, frameworks, and tools, depending on the type of application—whether it's a web app, mobile app, or desktop application. Additionally, it requires attention to aspects such as security, scalability, and user experience to ensure the application performs well in real-world scenarios. Ultimately, the goal is to create a reliable, efficient, and user-friendly application that provides value to its users.",
    image:'/hero1.png'
  },
  {
    title:'Hire Dedicated Developers',
    description:"We refers to the practice of employing skilled software professionals who work exclusively on your project, typically as part of an extended team. This model is ideal for businesses that require ongoing development work and want to maintain direct control over their projects. Dedicated developers bring in-depth expertise and focus, allowing for faster development cycles and high-quality outcomes. By hiring dedicated developers, businesses can scale their teams as needed, reduce overhead costs associated with in-house recruitment, and access a global talent pool. This approach ensures that developers are fully committed to the success of your project, offering flexibility, expertise, and a collaborative working relationship, which ultimately contributes to the long-term success and efficiency of the project.",
    image:'/hero2.png'
  },
  {
    title:'Take Your Internship',
    description:"We offers a valuable opportunity for students or early-career professionals to gain practical experience in their field of interest. Internships provide hands-on exposure to real-world work environments, allowing individuals to apply theoretical knowledge and develop new skills. They often serve as a stepping stone to full-time employment by offering insights into industry practices, enhancing resumes, and expanding professional networks. Participating in an internship can help individuals build confidence, understand workplace dynamics, and discover specific career paths that align with their interests. Additionally, internships offer the chance to work closely with experienced mentors, making it an essential part of career development and growth.",
    image:'/hero3.png'
  }
]

const features = [
  {
    id:1,
    description1:' Custom Solutions to Your Needs',
    description2:' Cutting-Edge Technologies',
    description3:' Agile Development Approach',
    description4:' Robust Security and Scalability',
  },
  {
    id:2,
    description1:' Expert and Versatile Talent Pool',
    description2:' Flexible Hiring Models',
    description3:' Dedicated Development Teams',
    description4:' Proven Track Record and Support',
  },
  {
    id:3,
    description1:' Hands-On Industry Experience',
    description2:' Skill Development and Mentorship',
    description3:' Collaborative Work Environment',
    description4:' Career Growth Opportunities',
  }
]

const blogs= [
  {
    id:1,
    image:"/cloud_blog.jpg",
    heading:"Cloud Computing Innovations",
    content:"Cloud computing is another technology that is revolutionizing the IT industry. It refers to the delivery of computing services, such as servers, storage, databases, networking, software, and more, over the internet.",
    date:"Thu Dec 19 2024"
  },
  {
    id:2,
    image:"/iot_blog.jpg",
    heading:"The Future of Internet of Things (IoT)",
    content:"Internet of Things (IoT) is a technology that connects physical devices, such as sensors, cameras, appliances, and more, to the internet, enabling them to collect, exchange, and process data. ",
    date:"Thu Dec 19 2024"
  },
  {
    id:3,
    image:"/security_blog.jpg",
    heading:"Cybersecurity Trends",
    content:"Cybersecurity is one of the most critical and challenging aspects of IT. It refers to the protection of IT systems, networks, and data from cyberattacks, such as malware, ransomware, denial-of-service, and more. ",
    date:"Thu Dec 19 2024"
  },
  {
    id:4,
    image:"/aiandml_blog.jpg",
    heading:"The Rise of AI and Machine Learning in IT",
    content:"Artificial Intelligence (AI) and ML are two of the most influential and impactful technologies in the IT industry. They are transforming the way IT systems and processes work, enabling faster, smarter, and more efficient solutions. ",
    date:"Thu Dec 19 2024"
  },
  {
    id:5,
    image:"/blokchain_blog.jpg",
    heading:"Blockchain Technology Beyond Cryptocurrency",
    content:"Blockchain technology is a technology that can help IT professionals enhance their cybersecurity, by providing a decentralized, distributed, and immutable ledger that can store and verify data, transactions, and contracts. ",
    date:"Thu Dec 19 2024"
  },
  {
    id:6,
    image:"/dataanalytics_blog.jpg",
    heading:"The Role of Data Analytics in Modern Manufacturing",
    content:"Introduction Data analytics is the highlight for boosting businesses since digitizing is rapidly transforming market trends. This is a necessary tool as it provides insights,",
    date:"Thu Dec 19 2024"
  }
]

const Hero = () => {

  const [index,setIndex] = useState(0)
  const [blogIndex,setblogIndex] = useState(0)
  const [isFullHeight, setIsFullHeight] = useState(true);
  const heroRef = useRef(null);

  // useEffect(() => {
  //   const checkHeight = () => {
  //     if (heroRef.current) {
  //       const contentHeight = heroRef.current.scrollHeight;
  //       const viewportHeight = window.innerHeight;
  //       setIsFullHeight(contentHeight <= viewportHeight);
  //     }
  //   };
  //   checkHeight();
  //   window.addEventListener('resize', checkHeight);

  //   return () => {
  //     window.removeEventListener('resize', checkHeight);
  //   };
  // }, []);
  
  useEffect( ()=>{
    const interval = setInterval(() => {
      if(index<2){
        setIndex(prev => prev+1)
      }
      else if(index==2){
        setIndex(0)
      }
    }, 8000);
    return () => clearInterval(interval);
  })


  const handleNext = () => {
    setblogIndex((prevIndex) => (prevIndex < 3 ? prevIndex + 1 : prevIndex));
  };
  const handlePrevious = () => {
    setblogIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };


  const [visibleIndexes,setVisibleIndexes] = useState([]);

  const toggleVisible = (index)=>{
    setVisibleIndexes((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  }
  const animationVariants = {
    initial: { opacity: 0, scale:0 },
    animate: { opacity: 1, scale:1 },
    exit: { opacity: 0, scale:0 },
  };
  const contentVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 50 },
  };

  return (
    <div>
        <div className='hero'>
            <div className='left'>
            <AnimatePresence mode="wait">
          <motion.h1
            key={headings[index].title}
            initial={{ opacity: 0, x: -350 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 350 }}
            transition={{ duration: 0.5 }}
          >
            {headings[index].title}
          </motion.h1>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.p
            key={headings[index].description}
            initial={{ opacity: 0, x: -350 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 350 }}
            transition={{ duration: 0.5 }}
          >
            {headings[index].description}
          </motion.p>
        </AnimatePresence>

        {/* <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Know More..
        </motion.button> */}
            </div>
            <div className="right">
                <div className="boxes">
          <motion.div
            className="box vbox bg-[url('/hero_spec_bg1.jpg')]"
            key={`description1-${index}`}
            variants={animationVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5 }}
          >
            {features[index].description1}
          </motion.div>
              <div className="box hbox"></div>
              <div className="box hbox"></div>
          <motion.div
            className="box vbox bg-[url('/hero_spec_bg2.jpg')]"
            key={`description2-${index}`}
            variants={animationVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5,delay:0.2 }}
          >
            {features[index].description2}
          </motion.div>

          <motion.div
            className="box vbox bg-[url('/hero_spec_bg3.jpg')]"
            key={`description3-${index}`}
            variants={animationVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5,delay:0.4 }}
          >
            {features[index].description3}
          </motion.div>
          <div className="box"></div>
          <div className="box"></div>
          <motion.div
            className="box vbox bg-[url('/hero_spec_bg4.jpg')]"
            key={`description4-${index}`}
            variants={animationVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5,delay:0.6}}
          >
            {features[index].description4}
          </motion.div>
                </div>
            </div>
        </div>
        <div className="first services">
            <h1>Our Services</h1>
              <div className="columns">
                {services.map((value) => {
                  // const ref = useRef(null);  // Create a reference for each box
                  // const isInView = useInView(ref, { once: true, margin: '-50px' });  // Detect visibility

                  return (
                    <motion.div
                      key={value.id}
                      // ref={ref}
                      className="box"
                      initial={{opacity:0.5,scale:0}}
                      whileInView={{
                      opacity:1,
                      scale:1,
                      transition:{ease:'easeIn',duration:0.5}
                  }}
                    >
                      <img src={value.link} alt={value.heading} />
                      <h2>{value.heading}</h2>
                      <p>{value.description}</p>
                    </motion.div>
                  );
                })}
              </div>
              <motion.a 
                initial={{opacity:0.5,scale:0}}
                whileInView={{
                opacity:1,
                scale:1,
                transition:{ease:'easeIn',duration:0.5,delay:0.2}
                }}
              href="/Services" className='button'>To Know More Services</motion.a>
        </div>
        <div className="third internship">
            <h1>Our Internship</h1>
            <div className='imagebox'>
              <img src='./internship.jpeg' alt="" />
            </div>
            <div className='desc'>
              <p>At <Link href={'/'} className='text-blue-800'>Gofreelab</Link>, we believe in nurturing talent and providing hands-on experiences that inspire growth and innovation. Our internship program offers students and recent graduates the chance to work on real projects, tackle exciting challenges, and collaborate with experienced professionals in their field of interest</p>
              <p>We welcome individuals who are passionate, curious, and eager to make a difference. Whether you're an undergraduate, graduate, or a recent graduate, if you're ready to bring fresh ideas and a positive attitude, we want to hear from you!</p>
            </div>
            <h3>Why Intern With Us?</h3>
            <div className='intern'>
                  <motion.div className="box"
                     initial={{opacity:0,scale:0}}
                     animate={{
                     opacity:1,
                     scale:1,
                     transition:{ease:'easeIn',duration:0,delay:0.25}
                    }}
                  >
                      <h5>Real-World Projects</h5>
                      <p>Work on impactful projects that contribute directly to our business objectives.</p>
                  </motion.div>
                  <motion.div className="box"
                      initial={{opacity:0,scale:0}}
                      animate={{
                      opacity:1,
                      scale:1,
                      transition:{ease:'easeIn',duration:0,delay:0.4}
                     }}
                  >
                      <h5>Gain Mentorship</h5>
                      <p>Learn from skilled mentors who are dedicated to guiding you in your career journey.</p>
                  </motion.div>
                  <motion.div className="box"
                    initial={{opacity:0.5,scale:0}}
                    animate={{
                    opacity:1,
                    scale:1,
                    transition:{ease:'easeIn',duration:0,delay:0.65}
                   }}
                  >
                      <h5>Build Your Network</h5>
                      <p> Connect with professionals across various departments and expand your professional network.</p>
                  </motion.div>
                  <motion.div className="box"
                      initial={{opacity:0,scale:0}}
                      animate={{
                      opacity:1,
                      scale:1,
                      transition:{ease:'easeIn',duration:0.5,delay:0.8}
                     }}
                  >
                      <h5>Develop Your Skills</h5>
                      <p> Grow your technical and soft skills through hands-on experience and professional development workshops.</p>
                  </motion.div>
            </div>
            <motion.a 
              initial={{opacity:0,scale:0}}
              animate={{
              opacity:1,
              scale:1,
              transition:{ease:'easeIn',duration:0.5,delay:1}
             }}
            href="/Internship" className='button my-7'>Explore More</motion.a>
        </div>
        <div className="second gofreelab">
          <h1>What GofreeLab Gives You</h1>
          <div className='content'>
              <div className="left">
                  {data.map( (value,index)=>(
                      <motion.div className='property' key={index}
                      initial={{opacity:0,x:-350}}
                      whileInView={{
                        opacity: 1, x: 0,
                        transition:{ease:'easeIn',duration:0.5,delay:0.25}}}>
                          <div className="box" onClick={() => toggleVisible(index)}>{value.heading} 
                            <MdKeyboardArrowDown />
                          </div>
                          {visibleIndexes.includes(index) && (
                          <span>
                            {value.content}
                          </span>
                          )}
                      </motion.div>
                  ))}
              </div>
              <div className="right">
                    <motion.img src="./properties.jpg" alt="" />
              </div>
          </div>
        </div>      
        <div className="fourth tech">
            <h1>Our Technologies</h1>
            <div className='columns'>
                  {img_links.map( (value)=>(
                    <div className='box' key={value.id}>
                        <img src={value.link} alt="" />
                        <p>{value.text}</p>
                    </div>
                  ) )}
            </div>
        </div>
        <div className="fifth blogs">
            <h1>Our Blogs</h1>
            {/* <div className='blogs'>
              {blogIndex>0 && (
                <div className="icon" onClick={handlePrevious}>
                    <SlArrowLeft style={{ fontSize: "50px",fontWeight:"800"}}/>
                </div>
              )}
              <div className="contents">
                    <div className="col">
                        <img src={blogs[blogIndex].image} alt="" />
                        <h2>{blogs[blogIndex].heading}</h2>
                        <p>{blogs[blogIndex].content}</p>
                        <p className='date'>{blogs[blogIndex].date}</p>
                        <button>Read More</button>
                    </div>
                    <div className="col col2">
                    <img src={blogs[blogIndex+1].image} alt="" />
                        <h2>{blogs[blogIndex+1].heading}</h2>
                        <p>{blogs[blogIndex+1].content}</p>
                        <p className='date'>{blogs[blogIndex+1].date}</p>
                        <button>Read More</button>
                    </div>
                    <div className="col">
                    <img src={blogs[blogIndex+2].image} alt="" />
                        <h2>{blogs[blogIndex+2].heading}</h2>
                        <p>{blogs[blogIndex+2].content}</p>
                        <p className='date'>{blogs[blogIndex+2].date}</p>
                        <button>Read More</button>
                    </div>
              </div> 
                  {blogIndex<3 && (
                    <div className='icon' onClick={handleNext}>
                        <SlArrowRight style={{ fontSize: "50px",fontWeight:"800"}}/>
                    </div>
                  )}
            </div> */}
            <div className="blogs">
                {/* {blogIndex > 0 && (
                  <div className="icon" onClick={handlePrevious}>
                    <SlArrowLeft style={{ fontSize: "50px", fontWeight: "800" }} />
                  </div>
                )} */}
                <div className="contents">
                  {[0, 1, 2].map((offset) => (
                    <motion.div
                      className="col"
                      key={blogs[blogIndex + offset].id}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      variants={contentVariants}
                      transition={{ duration: 0.5 }}
                    >
                      <img src={blogs[blogIndex + offset].image} alt="" />
                      <motion.h2>{blogs[blogIndex + offset].heading}</motion.h2>
                      <motion.p>{blogs[blogIndex + offset].content}</motion.p>
                      <motion.p className="date">{blogs[blogIndex + offset].date}</motion.p>
                      <motion.button whileHover={{ scale: 1.1 }}>Read More</motion.button>
                    </motion.div>
                  ))}
                </div>
                {/* {blogIndex < blogs.length - 3 && (
                  <div className="icon" onClick={handleNext}>
                    <SlArrowRight style={{ fontSize: "50px", fontWeight: "800" }} />
                  </div>
                )} */}
            </div>
            <a href="/Blogs" className="button">Get More Blogs</a>
        </div>
        
    </div>

    
  )
}

export default Hero

