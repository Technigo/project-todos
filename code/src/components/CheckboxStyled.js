import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import { tasks } from 'reducers/tasks'

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
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

const StyledCheckbox = styled.div` 
  display: inline-block;
  width: 18px;
  height: 18px;
  background: ${props => props.checked ? 'yellow' : 'black'};
  border-radius: 50%;
  transition: all 150ms;
`

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`

export const CheckboxStyled = ({checked, onChange}) => {
  const [isChecked, setChecked] = useState(checked)

  const handleOnChange = event => {
    setChecked(event.target.checked)
    onChange()
  }

  const Checkbox = ({ className, checked, ...props }) => (
    <CheckboxContainer>
      <HiddenCheckbox checked={checked} {...props}></HiddenCheckbox>
      <StyledCheckbox checked={checked}> </StyledCheckbox>
    </CheckboxContainer>
  )

  return (
    <div>
      <label>
        <Checkbox checked={isChecked} onChange={handleOnChange} />
      </label>
    </div>
  )
}
