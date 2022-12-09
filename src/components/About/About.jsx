import React from 'react'
import './About.css'
import { BsGithub, BsLinkedin, BsFillEnvelopeFill } from "react-icons/bs";

export default function About() {
  return (
    <div className='about-container'>
      <div className='about'>
        <div className='about-title'>Who am I?</div>
        <div className='about-content'>
        I am a Pharmacist turned Software Engineer, who takes pride in serving the community and the needs of others. As a front line medical professional, I am well versed in performing under pressure as well as thinking on my feet. Being involved in a fast-paced environment allowed me to sharpen my skills as a team leader and has taught me how to effectively delegate tasks in order to improve work-flow efficiency. Oftentimes,  I would perform a collaborative effort with other healthcare professionals to discuss and provide an optimal plan for a patient's wellbeing. These experiences have enabled me to become a better team player as I acquainted myself in an agile work environment with tight deadlines.
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
