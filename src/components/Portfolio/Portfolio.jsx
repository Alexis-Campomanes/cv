import React from 'react';
import './Portfolio.scss';
import img1 from '../../img/Screenshot_1.jpg';
import img2 from '../../img/Screenshot_45.jpg';
import img3 from '../../img/Screenshot_5.jpg';
import img5 from '../../img/Screenshot_2.jpg';
import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <div className='portfolio' id='Portfolio'>
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
        <Link to='view'>
          <button className='button button-s'>View All</button>
        </Link>
      </div>
    </div>
  )
}

export default Portfolio
