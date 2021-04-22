import React, { useState } from 'react'


import '../index.css'
import arrow from '../SVGs/arrow.svg'
import cross from '../SVGs/cross.svg'




const Header = () => {
  const [openActive, setOpenActive] = useState('false')

  const handleToggle = () => {
    setOpenActive(!openActive)
  }

  return (
    <aside className={openActive ? "header-closed" : "header-open"}>
      <div className={openActive ? "open-icon" : "header-open"}>
        <img 
        className="menu-img" 
        src={arrow} 
        alt="menu"
        onClick={handleToggle}  
        />
        <p className="open-text">open</p>
      </div>
      <h1 className="title">TO-DO LIST</h1>
      <div className="header-circle"></div>
    </aside>
  )
}

export default Header