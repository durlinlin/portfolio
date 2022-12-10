import React from 'react'
import './About.css'
import { BsGithub, BsLinkedin, BsFillEnvelopeFill } from "react-icons/bs";

export default function About() {
  return (
    <div className='about-container'>
      <div className='about'>
        <div className='about-title'>Who am I?</div>
        <div className='about-content'>
        I am a Pharmacist turned Software Engineer based in New York City. I take pride in my detail orientated nature. I am also passionate about learning and gaining more skills and being able to utilize them to improve efficiency on an output matter.
        </div>
      </div>
      <div className='contact'>
        <div className='contact-title'>Contact Me</div>
        <div className='contact-content'>
          <span><BsFillEnvelopeFill /> linlin.lam01@gmail.com</span>
          <a href='https://github.com/durlinlin' target="_blank" style={{ textDecoration: 'none', color: 'white' }}><BsGithub style={{color: 'black'}} /> GitHub</a>
          <a href='https://www.linkedin.com/in/linlinlam' target="_blank" style={{ textDecoration: 'none', color: 'white'}}><BsLinkedin style={{color: 'blue'}} /> LinkedIn</a>
        </div>
      </div>
    </div>
  )
}
