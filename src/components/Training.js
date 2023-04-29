import React from 'react'
import './styles/Training.css'
import shum from '../assets/shum.jpg'
import advance from '../assets/advance.jpg'

const Training = () => {
  return (
    <section className='training'>
        <h1>Training</h1>
        <div className='card-container'>
            <div className='card'>
                    <img src={shum} alt='image'/>
                    <h4>Training completed:</h4>
                    <p>Programming language C++</p>
                    <p>Object Oriented Programming</p>
                    <p>Database</p>
            </div>
            <div className='card'>
                    <img src={advance} alt='image'/>
                    <h4>Training completed:</h4>
                    <p>Java Script</p>
                    <p>Html and Css</p>
                    <p>React Js</p>
                    <p>Node Js</p>
            </div>
            
        </div>
    </section>
  )
}

export default Training