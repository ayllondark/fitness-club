import React, { useRef } from 'react';
import './Join.css';
import emailjs from '@emailjs/browser';


const Join = () => {

    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_or0b7ro', 'template_qj3hml7', form.current, 'ynU7RfsGtjfV07475')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };


  return (
    <div className='join' id='join-us'>
        <div className="left-j">
            <hr />
            <div>
                <span className='stroke-text'>LISTO PARA</span>
                <span>ELEVAR EL NIVEL</span>
            </div>
            <div>
                <span>DE SU CUERPO</span>
                <span className='stroke-text'>CON NOSOTROS?</span>
            </div>
        </div>
        <div className="right-j">
            <form ref={form} className="email-container" onSubmit={sendEmail}>
                <input type="email" name='user_email' placeholder='Enter your Email addess' />
                <button className='btn btn-j'>Únete ahora</button>
            </form>
        </div>
    </div>
  )
}

export default Join