import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import { tasks } from 'reducers/tasks'

export const CheckboxStyled = () => {
  const dispatch = useDispatch()
  const [checked, setChecked] = useState(false)

  const handleOnChange = event => {
    setChecked(event.target.checked)
  }

  const Checkbox = (props) => <input type='checkbox' {...props}></input>

  const HiddenCheckbox = styled.input.attrs({type:'checkbox'})`
    border: none;
    clip:rect(0 0 0 0);
    clippath: inset(50%);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: absolute;
    white-space: nowrap;
    width: 1px;
  `

  return <div>
    <label>
      <Checkbox checked={checked} onChange={handleOnChange} />
    </label>
  </div>
}