/* eslint-disable max-len */
import React from 'react'
import notebook from '../assets/notebook.png'

export const Header = () => {
  return (
    <div className="headerContainer">
      <h1 className="headeTitle">GET THINGS DONE!
      </h1>
      <img className="icon" src={notebook} alt="Todo icon" />
    </div>
  )
}

export default Header
