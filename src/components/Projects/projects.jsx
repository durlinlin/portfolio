import React from 'react'
import './projects.css'
import { BsGithub } from 'react-icons/bs'

export default function projects() {
  return (
    <div className='projects-container'>
      <div className='project pOne'>Talkin' Smack
      <img src={require('../../img/Talkinsmack.png')} />
        <a href='https://github.com/SEI-Buffleheads/talkin-smack-fe' target="_blank" style={{ textDecoration: 'none', color: 'white' }}><BsGithub style={{color: 'black'}} /> GitHub Repo</a>
          <a href='https://genuine-marshmallow-56fd7d.netlify.app' target="_blank" style={{ textDecoration: 'none', color: 'white'}}>View Site</a>
      </div>
      <div className='project pTwo'>Legendary Slayers
        <img src={require('../../img/League.png')} />
        <a href='https://github.com/durlinlin/Legendary-Slayers-FE' target="_blank" style={{ textDecoration: 'none', color: 'white' }}><BsGithub style={{color: 'black'}} /> GitHub Repo</a>
          <a href='https://legendsofleague.netlify.app' target="_blank" style={{ textDecoration: 'none', color: 'white'}}>View Site</a>
      </div>
      <div className='project pThree'>Catch the Treasure
        <img src={require('../../img/CatchTreasure.png')} />
        <a href='https://github.com/durlinlin/Catch-the-treasure' target="_blank" style={{ textDecoration: 'none', color: 'white' }}><BsGithub style={{color: 'black'}} /> GitHub Repo</a>
          <a href='https://durlinlin.github.io/Catch-the-treasure' target="_blank" style={{ textDecoration: 'none', color: 'white'}}>View Site</a>
      </div>
    </div>
  )
}
