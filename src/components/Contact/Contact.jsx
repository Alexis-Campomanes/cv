import React from 'react';
import './Contact.scss'
import CallMe from '../CallMe/CallMe';
import call from '../../img/phone.png';
import email from '../../img/envelope.png';
import map from '../../img/map.png';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

  const [done, setDone] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ltokzvb', 'template_prvjc1d', form.current, 'f4U_Wr8VnobciVsYl')
      .then((result) => {
          console.log(result.text);
          setDone(true)
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    
      <div className='contact' id='Contact'>
        <div className='c-left'>
          <span>Contact Us</span>
          <div className='c-callme'>
            <CallMe text='Call Me' text1='+51 964206125' img={call}/>
            <CallMe text= 'Email' text1='alexiscpp.developer@gmail.com' img={email} />
            <CallMe text = 'Address' text1= 'Av. Cesar Vallejo #207 dpt 802 Lima-Lince' img={map} />
          </div>
        </div>
        <div className='c-right'>
          <form ref={form} onSubmit={sendEmail}>
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
            <span>{done && 'Thanks for contactin me!'}</span>
          </form>
        </div>
      </div>


  )
}

export default Contact
