'use client'
import React, { useState,useEffect } from 'react'
import './Hero.scss'

const data = [
  {
    title:'Build your application',
    description:'GofreeLab technologies leading software development company in india. We will help you to reach your thoughts with our developement team. Our dedicated developers will ready build your thoughts.   Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem blanditiis accusamus tenetur optio est dicta vel magnam? Facilis facere quis ipsa ipsum minus! Soluta asperiores, id deleniti aspernatur ipsam voluptates?',
    image:'/hero1.png'
  },
  {
    title:'Hire Dedicated Developers',
    description:'GofreeLab technologies have a bunch developers in diffrenet platform who can drive your business in to excellence. We provide high-quality cost-effective hiring models.   Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem blanditiis accusamus tenetur optio est dicta vel magnam? Facilis facere quis ipsa ipsum minus! Soluta asperiores, id deleniti aspernatur ipsam voluptates?',
    image:'/hero2.png'
  },
  {
    title:'Take Your Internship',
    description:'GofreeLab technologies provide freshers to do their internships. We delighted welcome you join our team, and you can establish your skill on live projects.   Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem blanditiis accusamus tenetur optio est dicta vel magnam? Facilis facere quis ipsa ipsum minus! Soluta asperiores, id deleniti aspernatur ipsam voluptates?',
    image:'/hero3.png'
  }
]

const Hero = () => {

  const [index,setIndex] = useState(0)
  
  useEffect( ()=>{
    const interval = setInterval(() => {
      if(index<2){
        setIndex(prev => prev+1)
      }
      else if(index==2){
        setIndex(0)
      }
    }, 4000);
    return () => clearInterval(interval);
  })

  return (
    <div className='hero'>
        <div className='left'>
            <h1>{data[index].title}</h1>
            <p>{data[index].description}</p>
            <button>Know More..</button>
        </div>
        <div className='right'>
              {/* <img src={data[index].image} alt="" /> */}
        </div>
    </div>
  )
}

export default Hero
