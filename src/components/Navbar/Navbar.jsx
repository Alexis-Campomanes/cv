import React from 'react';
import './Navbar.scss';
import Logo from '../../img/2751071.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <div className='navbar' >
      <div className='n-logo'>
        <img src={Logo} alt="Logo"/>
      </div>
      <div className="n-list">
        <ul>
        <Link spy={true} to={'intro'} smooth={true} activeClass={'activeClass'}>
          <li>Home</li>
        </Link>
        <Link spy={true} to={'Skills'} smooth={true} >
          <li>Skills</li>
        </Link>
        <Link spy={true} to={'Portfolio'} smooth={true}>
          <li>Portfolio</li>
        </Link>  
        <Link spy={true} to={'Experience'} smooth={true}>
          <li>Experience</li>
        </Link>
        <Link spy={true} to={'Contact'} smooth={true}>
        <li>Contact us</li>
        </Link>
        </ul>
        <button className='button'>Download CV</button>
      </div>
    </div>
  )
}

export default Navbar
