import React from 'react';
import './Navbar.scss';
import Logo from '../../img/pngegg-(1).png';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='n-logo'>
        <img src={Logo} alt="Logo" />
      </div>
      <div className="n-list">
        <ul>
          <li>About Me</li>
          <li>Services</li>
          <li>Portfolio</li>
          <li>Blog</li>
          <li>Contact us</li>
        </ul>
        <button>Download CV</button>
      </div>
    </div>
  )
}

export default Navbar
