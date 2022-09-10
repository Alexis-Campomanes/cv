import React from 'react';
import './Intro.scss';
import img1 from '../../img/pngegg.png';
import { UilGithub } from '@iconscout/react-unicons';
import { UilLinkedin } from '@iconscout/react-unicons';
import { UilTwitter } from '@iconscout/react-unicons'

const Intro = () => {
  return (
    <div className='intro'>
      <div className="left">
        <span>Welcome! I Am</span>
        <span>Alexis Campomanes</span>
        <span>Frontend developer and Bachelor's degree of geographic engineering</span>
        <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero aperiam nesciunt ex quidem eveniet porro cum quia commodi deserunt tenetur nisi molestiae quisquam minus, esse similique sapiente necessitatibus fuga? Consequatur?</span>
      </div>
      <div className="right">
        <div>
          <img src={img1} alt="" />
        </div>
        <div className='follow'>
          <span>follow me on:</span>
          <hr></hr>
        <div className='icons'>
          <UilGithub  color= 'var(--red)' size= '2rem'/>
          <UilLinkedin  color= 'var(--red)' size= '2rem' />
          <UilTwitter  color= 'var(--red)' size= '2rem' />
        </div>
        </div>
      </div>
    </div>
  )
}

export default Intro
