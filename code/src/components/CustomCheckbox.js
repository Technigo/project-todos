import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { todos } from 'reducers/todos'

// Continue @16 mins in lecture

export const CustomCheckbox = () => {
  const dispatch = useDispatch()
  const [checked, setChecked] = useState(false)
  const handleOnChange = event => {
    setChecked(event.target.checked)
  }
  
  const Checkbox = (props) => <input type="checkbox" {...props}></input>
  
  return (
    <div>
      <label>
        <Checkbox checked={checked} onChange={handleOnChange}></Checkbox>
      </label>
      The state is {checked.toString()}
    </div>
  )
}