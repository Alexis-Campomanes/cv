import React from 'react';
import './Cards.scss';



const Cards = ({text1, text2, icons}) => {
  return (
    <div className='card'>
      <div className='c-text'>
        <span>{text1}</span>
        <span>{text2}</span>
      </div>
      <div className='c-img' style={{
        backgroundColor:'var(--red)',
        position: 'relative',
        width: '30px',
        padding: '0.5rem',
        display: 'flex',
        aligContent:'center',
        left :'4rem',
        top: '-6rem'
      }}>
        <img src={icons} alt="" />
      </div>
    </div>
  )
}

export default Cards
