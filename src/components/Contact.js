
import React from 'react'
import { Link } from 'react-router-dom'
import './styles/Contact.css'

const Contact = () => {
  return (
    <div className='contact'>
        
        <form>
            <label>Your Name</label>
            <input type='text' placeholder='Enter your name'/>
            <label>Your Email</label>
            <input type='text' placeholder='Enter your email'/>
            <label>About You</label>
            <input type='text' placeholder='Developer'/>
            <label>Message</label>
            <textarea cols={50} rows={7} placeholder='Hello'></textarea>

            <button>Send</button>
        </form>

    </div>
  )
}

export default Contact;