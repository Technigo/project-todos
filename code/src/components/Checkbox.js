import React, { useState } from 'react'
import styled from 'styled-components'

const Dot = styled.svg`
  `
  
const HiddenCheckBox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`
const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`  
const StyledCheckBox = styled.div`
  display: inline-block;
  width: 22px;
  height: 22px;
  background: ${(props) => (props.checked ? '#f25849' : '#F9EFE5')};
  border-radius: 50%;
  transition: all 150ms;
  cursor: pointer;
  ${Dot} {
  visibility: ${props => props.checked ? 'visible' : 'hidden'}
  }
`

export const Checkbox = ({ isChecked, onChangeHandler }) => {
  const [checked, setChecked] =useState(isChecked)

  const handleOnChange = event => {
    onChangeHandler()
    setChecked(event.target.checked)
  }

  const Checkbox = ({ className, checked, ...props }) => (
    <CheckboxContainer>
      <HiddenCheckBox checked={checked} {...props}></HiddenCheckBox>
      <StyledCheckBox checked={checked}>
        <Dot viewBox='0 0 24 24'>
          <circle cx='12' cy='12' r='6' stroke='none' fill='#F9EFE5'></circle>
        </Dot>
      </StyledCheckBox>
    </CheckboxContainer>
  )

  return (
    <div>
      <label>
        <Checkbox checked={checked} onChange={handleOnChange}></Checkbox>
      </label>
    </div>
  )


}
