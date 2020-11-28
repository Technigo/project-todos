import React, { useState } from 'react'
import styled from 'styled-components'

export const CustomCheckbox = ({isChecked, onChangeHandler}) => {
  
  const [checked, setChecked] = useState(isChecked)

  const handleOnChange = event => {
    onChangeHandler()
    setChecked(event.target.checked)
  }

  const HiddenCheckbox = styled.input.attrs({type: "checkbox"})`
    border: 0;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  `

  const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 3px;
  `

  const StyledCheckbox = styled.div`
    display: inline-block;
    width: 18px;
    height: 18px;
    border: 1px solid #dedede;
    background-color: ${props => props.checked ? "#A986AD" : "#ececec" };
    transition: all 150ms;
    cursor: pointer;

    &:hover {
      background-color: rgba(143, 99, 148, 0.3)
    }
    
    ${Icon} {
      visibility: ${props => props.checked ? "visible" : "hidden"}
    }
  `
  const CheckboxContainer = styled.div`
    display: flex;
  `

const Checkbox = ({className, checked, ...props}) => (
  <CheckboxContainer>
    <HiddenCheckbox checked={checked} {...props}>
    </HiddenCheckbox>
    <StyledCheckbox checked={checked}>
      <Icon viewBox="0 0 24 24">
        <polyline points="20 6 9 17 4 12"/>
      </Icon>
    </StyledCheckbox>
  </CheckboxContainer>
)

  return (
    <div>
      <label>
        <Checkbox 
          checked={checked}
          onChange={handleOnChange}
        >
        </Checkbox>
      </label>
    </div>
  )
}