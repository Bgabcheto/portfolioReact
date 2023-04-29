import React from 'react'
import './styles/Section.css'
import MyPhoto from '../assets/MyPhoto.jpg'

const Section = () => {
  return (
    <section className='main-section'>
      <div className='container'>
        <div className='text'>
            <h1>My name is</h1>
            <h1 className='h1-big'>Borislava Dimitrova</h1>
            <p>Web Developer</p>
        </div>
        <div className='image'>
            <img src={MyPhoto} alt='Avatar' />
        </div>
      </div>
    </section>
  )
}

export default Section