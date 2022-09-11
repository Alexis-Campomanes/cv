import React from 'react';
import './Work.scss';
import Works from '../../img/11.png';

const Work = () => {
  return (
    <div className='work'>
      <span>My Experiences</span>
      <span>My experience in a timeline</span>
        <div>
          <img src={Works} alt="" />
        </div>
    </div>
  )
}

export default Work
