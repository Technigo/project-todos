import React, { useState } from 'react'

import '../index.css'
import arrow from '../SVGs/arrow.svg'
import cross from '../SVGs/cross.svg'

const Header = () => {
  const [activeHeader, setActiveHeader] = useState('false')
  const [activeIcon, setActiveIcon] = useState('false')
  const [activeText, setActiveText] = useState('false')

  const handleToggle = () => {
    setActiveHeader(!activeHeader)
    setActiveIcon(prevMode => !prevMode)
    setActiveText(prevMode => !prevMode)
  } 

  return (
    <aside className={activeHeader ? "header-closed" : "header-open"}>
      <div className="icon-open" onClick={handleToggle} >
        <img 
          className="menu-img" 
          src={activeIcon ? arrow : cross}
          alt="menu"
        />
        <p className="open-text">{activeText ? 'open' : ''}</p>
      </div>
        <h1 className="title">TO-DO LIST</h1>
        <div className="header-circle"></div>
    </aside>
  )
}

export default Header

