import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'

export default function navbar() {
  return (
    <div className='navbar-container'>
      <div className='navbar-prf-icon'>
        <div className='navbar-prf-img'>LLL</div>
        {/* <div className='navbar-prf-name'>Lin Lin Lam</div> */}
      </div>
      <div className='navbar-icons'>
        <Link className='tab' style={{ textDecoration: 'none' }} to='/'>Home</Link>
        <Link className='tab' style={{ textDecoration: 'none' }} to='/projects'>Projects</Link>
        <Link className='tab' style={{ textDecoration: 'none' }} to='/aboutme'>About Me</Link>
      </div>
    </div>
  )
}
