import React, { useState } from 'react'
import 'styling/toggle-button.css'


export const ToggleButton = () => {
  const [toggle, setToggle] = useState(false)

  const handleToggle = () => {
    setToggle(true)
  }


  return (
    <button className="toggle-button" onClick={handleToggle}>+</button>
  )
}