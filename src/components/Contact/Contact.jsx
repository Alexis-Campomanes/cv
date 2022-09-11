import React from 'react';
import './Contact.scss'
import CallMe from '../CallMe/CallMe';
import call from '../../img/phone.png';
import email from '../../img/envelope.png';
import map from '../../img/map.png'

const Contact = () => {
  return (
    
      <div className='contact'>
        <div className='c-left'>
          <span>Contact Us</span>
          <div className='c-callme'>
            <CallMe text='Call Me' text1='+51 964206125' img={call}/>
            <CallMe text= 'Email' text1='alexiscpp.developer@gmail.com' img={email} />
            <CallMe text = 'Address' text1= 'Cesar Vallejo dpt 802 Lima-Ate' img={map} />
          </div>
        </div>
        <div className='c-right'>
          <form>
            <div className="data">
              <input type="text" name='user_name' className='user' placeholder='Name'/>
              <input type="email" name='user_email' className='user' placeholder='Email'/>
            </div>
            <div className="phone">
              <input type="tel" name='user_tel' className='user' placeholder='Phone#'/>
              <input type="text" name='user_budget' className='user' placeholder='Budget' />
            </div>
            <textarea name='message' className='user' placeholder='Message'></textarea>
            <button type='submit' className='button button-s'>Submit</button>
          </form>
        </div>
      </div>


  )
}

export default Contact
