import React, { useState } from 'react'
import styled from 'styled-components'

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
border: none;
clip:rect(0 0 0 0);
clippath: inset(50%);
height: 0px;
width: 1px;
margin: -1px;
overflow: hidden;
padding: absolute;
white-space: nowrap;
`

const StyledCheckbox = styled.div` 
  display: inline-block;
  width: 18px;
  height: 18px;
  background: ${props => props.checked ? '#4D1C39' : '#9A6A80'};
  border-radius: 50%;
  transition: all 150ms;
`

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`

export const CheckboxStyled = ({ checked, onChange }) => {
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
