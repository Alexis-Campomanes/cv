import React from 'react';
import './Footer.scss';
import { UilGithub } from '@iconscout/react-unicons';
import { UilLinkedin } from '@iconscout/react-unicons';
import { UilTwitter } from '@iconscout/react-unicons'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="icons">
        <a href="https://github.com/Alexis-Campomanes/cv"><UilGithub  color='var(--red)'/></a>
        <a href="https://www.linkedin.com/in/alexiscampomanes/"><UilLinkedin color='var(--red)' /></a>
        <a href="https://twitter.com/AlexisC47558826?t=lnR_OzuEApBldS9PuvM--g&s=09"><UilTwitter color='var(--red)' /></a>
      </div>
      <hr></hr>
      <span>©2022 - Form | All right reserved</span>
    </div>
  )
}

export default Footer
