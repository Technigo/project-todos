import React from 'react'

import logo from '../assets/logo.svg'
import './header.css'
import './item.css'

export const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="Todo Logo"></img> 
    </header>
  )
}