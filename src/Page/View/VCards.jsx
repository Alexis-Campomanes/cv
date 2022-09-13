import React from 'react';
import './VCards.scss'
import { UilGithub } from '@iconscout/react-unicons';
import { UilDesktop } from '@iconscout/react-unicons'

const VCards = ({img, link, link1}) => {
  return (
    <div className="v-img">
        <img src={img} alt="" />
          <div className="v-icons">
            <a href={link}>
            <UilDesktop color='#b71d32' size='50px'/>
            </a>
            <a href={link1}>
            <UilGithub color='#b71d32' size='50px'/>
            </a>
          </div>
      </div>
  )
}

export default VCards
