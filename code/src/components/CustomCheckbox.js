import React, { useState } from 'react';
import { useDispatch } from 'react-redux'

export const CustomCheckbox = () => {
  const [checked, setChecked] = useState(false) 
  const dispatch = useDispatch()

  const handleOnChange = event => {
    setChecked(event.target.checked)
  }
  /*creates the checkbox component below*/
  const Checkbox = (props) => <input type='checkbox' {...props}></input> 

  return (
    <div>
      <label>
        <Checkbox checked={checked} onChange={handleOnChange}/>
      </label>
    </div>
  )
} 