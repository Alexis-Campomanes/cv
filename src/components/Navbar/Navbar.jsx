import React from 'react';
import './Navbar.scss';
import Logo from '../../img/2751071.png';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='n-logo'>
        <img src={Logo} alt="Logo"/>
      </div>
      <div className="n-list">
        <ul>
          <li>About Me</li>
          <li>Services</li>
          <li>Portfolio</li>
          <li>Blog</li>
          <li>Contact us</li>
        </ul>
        <button className='button'>Download CV</button>
      </div>
    </div>
  )
}

export default Navbar
