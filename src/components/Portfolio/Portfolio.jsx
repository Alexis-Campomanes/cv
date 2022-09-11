import React from 'react';
import './Portfolio.scss';
import img1 from '../../img/Screenshot_1.jpg';
import img2 from '../../img/Screenshot_45.jpg';
import img3 from '../../img/Screenshot_5.jpg';
import img4 from '../../img/Screenshot_7.jpg';
import img5 from '../../img/Screenshot_2.jpg'

const Portfolio = () => {
  return (
    <div className='portfolio'>
      <span>Portfolio</span>
      <div className='p-img'>
      <div className='p-conteiner'>
        <img src={img1} alt="" />
      </div>
      <div className='p-conteiner'>
        <img src={img2} alt="" />
      </div>
      <div className='p-conteiner'>
        <img src={img3} alt="" />
      </div>
      <div className='p-conteiner'>
        <img src={img5} alt="" />
      </div>     
      </div>
      <div className='p-button'>
        <button className='button button-s'>View All</button>
      </div>
    </div>
  )
}

export default Portfolio
