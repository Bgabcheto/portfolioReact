import React from 'react'
import {useState} from 'react'
import { Link } from 'react-router-dom'
import { MenuOutlined } from '@ant-design/icons'
import './styles/Header.css'
import {Data} from './Data'


const Header = () => {

    const [open, setOpen] = useState(false)
    const showMenu = () => {
        setOpen(!open)
    }

  return (
    <div className='header'>
        <nav>
            <div className='logo'>
                <h1>Portfolio BD</h1>
            </div>
            <ul>
                <li>
                    <Link to='#'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>
                    <Link to='training'>Training</Link>
                </li>
                
                <li>
                    <Link to='/contact'>Contact</Link>
                </li>
                <div className='hamburger-menu'>
                    <MenuOutlined className='menu' onClick={showMenu}/>
                </div>
            </ul>
        </nav>
        <nav className={open ? 'slider active' : 'slider'}>
                <ul className='slider-ul' onClick={showMenu}>
                        {Data.map((item, index) => {
                            return (
                                <li key={index} className={item.className}>
                                    <Link to={item.path}>{item.text}</Link>
                                </li>
                            )
                        })}
                </ul>
        </nav>
    </div>
  )
}

export default Header