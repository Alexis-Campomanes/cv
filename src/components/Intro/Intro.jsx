import React from 'react';
import './Intro.scss';
import img1 from '../../img/pngegg.png';
import { UilGithub } from '@iconscout/react-unicons';
import { UilLinkedin } from '@iconscout/react-unicons';
import { UilTwitter } from '@iconscout/react-unicons'

const Intro = () => {
  
  return (
    <div className='intro' id='intro'>
      <div className="left">
        <span>Welcome! I Am</span>
        <span>Alexis Campomanes</span>
        <span>Frontend developer and Bachelor's degree of geographic engineering</span>
        <span>Looking for a company in rapid development, in which I can share my experience, capacity and responsibility, with the ability to solve problems in a competitive, creative environment with clear objectives,willing improve and consolidate professionally.
          As a medium term goal to be a full stack developer.</span>
      </div>
      <div className="right">
        <div>
          <img src={img1} alt="" />
        </div>
        <div className='follow'>
          <span>follow me on:</span>
          <hr></hr>
        <div className='icons'>
          <a href="https://github.com/Alexis-Campomanes/cv"><UilGithub  color='var(--red)'/></a>
          <a href="https://www.linkedin.com/in/alexiscampomanes/"><UilLinkedin color='var(--red)' /></a>
          <a href="https://twitter.com/AlexisC47558826?t=lnR_OzuEApBldS9PuvM--g&s=09"><UilTwitter color='var(--red)' /></a>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Intro
