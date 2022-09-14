import React from 'react';
import './View.scss';
import img1 from '../../img/Screenshot_1.jpg';
import img2 from '../../img/Screenshot_2.jpg';
import img3 from '../../img/Screenshot_45.jpg';
import img4 from '../../img/Screenshot_5.jpg';
import VCards from './VCards';
import { Link } from "react-router-dom";



const View = () => {
  return (
    <div className='view'>
      <div className="v-text">
        <span>Personal project list</span>
        <Link to='/'>
          <div className="button button-v">Return</div>
        </Link>
      </div>
        
          <div className="v-cards">
            <VCards 
          img={img1} 
          link='https://ecommerce-astro.netlify.app/'
          link1='https://github.com/Alexis-Campomanes/ecommerce-campomanes'
        />
        <VCards 
          img={img2}
          link='https://incomparable-parfait-7b4fc4.netlify.app/'
          link1='https://github.com/Alexis-Campomanes/page-movie'
        />
        <VCards 
          img={img3}
          link='https://alexis-campomanes.netlify.app/'
          link1='https://github.com/Alexis-Campomanes/website-cv'
        />
        <VCards 
          img={img4}
          link='https://gym-app-react.netlify.app/'
          link1='https://github.com/Alexis-Campomanes/gym'
        />
        </div>
    </div>
  )
}

export default View
