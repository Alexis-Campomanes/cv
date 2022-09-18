import React from 'react';
import './Navbar.scss';
import Logo from '../../img/2751071.png';
import { Link } from 'react-scroll';
import { UilAlignJustify } from '@iconscout/react-unicons'
import { useState, useEffect } from 'react';

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }

  useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }
    window.addEventListener('resize', changeWidth)
    return () => {
      window.removeEventListener('resize', changeWidth)
    }  
  
  }, [])

  

  return (
    <div className='navbar' >
      <div className='n-logo'>
        <img src={Logo} alt="Logo"/>
      </div>
      <div className="n-list">
        <UilAlignJustify onClick={toggleNav}/>
        {(toggleMenu || screenWidth > 1110) && (
          <ul>
            <Link spy={true} to={'intro'} smooth={true} activeClass={'activeClass'}>
              <li className='l-hover'>Home</li>
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
          <a href='./CvDownload.pdf' download className='button b-hover'>Download CV</a>
          </ul>
          )}
          
      </div>
    </div>
  )
}


export default Navbar
