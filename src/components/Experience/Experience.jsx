import React from 'react';
import './Experience.scss';
import Trofeo from '../../img/trophy.png';
import Users from '../../img/users.png';
import Cards from '../Cards/Cards';
import Constructor from '../../img/constructor.png';
import File from '../../img/file.png'


const Experience = () => {
  return (
    <div className='experience'>
      <Cards text1='02' text2='Awards' icons={Trofeo}/>
      <Cards text1='50+' text2='Clients' icons={Users} />
      <Cards text1='03' text2='Years Experience' icons={Constructor} />
      <Cards text1='80+' text2='Projects' icons={File} />
    </div>
  )
}

export default Experience
