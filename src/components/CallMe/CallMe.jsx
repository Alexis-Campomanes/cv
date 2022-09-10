import React from 'react';
import './CallMe.scss'

const CallMe = ({text, text1, img}) => {
  return (
    <div className='call'>
      <div className='c-conteiner'>
        <img src={img} alt="" />
      </div>
      <div className='call-text'>
        <span>{text}</span>
        <span>{text1}</span>
      </div>
    </div>
  )
}

export default CallMe
