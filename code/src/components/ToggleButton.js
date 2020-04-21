import React, { useState } from 'react'
import 'styling/toggle-button.css'
import { TodoInput } from './TodoInput'


export const ToggleButton = () => {
  const [toggle, setToggle] = useState(false)

  const handleToggle = () => {
    setToggle(!toggle)
  }

  return (
    <div>
      <button className="toggle-button" onClick={handleToggle}>+</button>
      {toggle && <TodoInput />}
    </div>
  )
}