import React from 'react'
import './styles/About.css'
import tower from '../assets/tower.jpg'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <section className='secondSection'>
            <h1 className='about-me'>About Me</h1>
            <div className='container-two'>
                <div className='img-cont'>
                    <img src={tower} alt='Image'/>
                </div>
                <div className='text-two'>
                    <h3>Skills:</h3>
                    <p>Frond-End Developer</p>
                    <p>Java Script</p>
                    <p>React Js</p>
                    <p>Node Js</p>
                    <p>Html and Css</p>
                </div>
            </div>
            
                   
                
    </section>
  )
}

export default About