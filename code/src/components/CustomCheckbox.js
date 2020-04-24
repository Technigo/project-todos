import React, { useState } from 'react'
import styled from 'styled-components'

export const CustomCheckbox = ({ isChecked, onChange }) => {
  const [checked, setChecked] = useState(isChecked)

  const handleOnChange = (event) => {
    onChange()
    setChecked(event.target.checked);
  }

  const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
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

  // checkmark
  const Icon = styled.svg`
    fill: none;
    stroke: white;
    stroke-width: 2px;
  `

  const StyledCheckbox = styled.div`
    display: inline-block;
    width: 16px;
    height: 16px;
    margin-left: 5px;
    margin-top: 3px;
    border-radius: 50%;
    border: 1px solid #502F4C;
    background: ${(props) => (props.checked ? '#502F4C' : 'white')};
    ${Icon} {
      visibility: ${(props) => (props.checked ? 'visible' : 'hidden')};
    }
  `

  const CheckboxContainer = styled.div`
    display: inline-block;
    vertical-align: middle;
  `

  const Checkbox = ({ className, checked, ...props }) => (
    <CheckboxContainer>
      <HiddenCheckbox checked={checked} {...props}></HiddenCheckbox>
      <StyledCheckbox checked={checked}>
        <Icon viewBox='0 0 24 24'>
          <polyline points='20 4 9 17 4 12' />
        </Icon>
      </StyledCheckbox>
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