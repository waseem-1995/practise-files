import React from 'react'
import '../styles/navbar.css'
import Links from './Links'
import Logo from './Logo'
import Button from './Button'

const Navbar = () => {
  return (
    <div className='navbarBox'>
        <Logo/>
        <Links/>
        <Button/>
    </div>
  )
}

export default Navbar