import React from 'react';
import './Work.scss';
import Works from '../../img/11.png';
import Works1 from '../../img/works1.png'

const Work = () => {
  


  return(
    <div className='work' id='Experience'>
      <span>My Experiences</span>
      <span>My experience in a timeline</span>
      <img src={Works} alt="" />
      <img src={Works1} alt="" />
    </div>
  )

  
}

export default Work
