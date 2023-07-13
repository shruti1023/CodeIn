import React from 'react';
import "./contact.css";


export default function Contact() {
  return (
    <div className='contact'>
        <span className='contactTitle'>DROP US A MESSAGE</span>
        <form className='contactForm'>
        <label className='contactLabel'>Name</label>
            <input type="text" className='contactInput' placeholder='Your Name' />
        <label className='contactLabel'>Email</label>
            <input type="text" className='contactInput' placeholder='Your Email' />
        <label className='contactLabel'>Message</label>
            <textarea type="text" className='message' placeholder='Your Message' />
        </form>
        <button className='contactButton'>Send</button>

    </div>
  )
}
