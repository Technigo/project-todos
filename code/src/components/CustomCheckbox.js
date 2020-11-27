import React, { useState } from 'react'
import styled from 'styled-components'

export const CustomCheckbox = props => {
  
  const [checked, setChecked] = useState(false)

  const handleOnChange = event => {
    setChecked(event.target.checked)
  }

  const HiddenCheckbox = styled.input.attrs({type: "checkbox"})`
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

const Icon = styled.svg`
fill: none;
stroke: white;
stroke-width: 3px;
`

  const StyledCheckbox = styled.div`
    display: inline-block;
    width: 16px;
    height: 16px;
    background-color: ${props => props.checked ? "#5b3f5e" : "#A986AD" };
    border-radius: 3px;
    transition: all 150ms;
    
    ${Icon} {
      visibility: ${props => props.checked ? "visible" : "hidden"}

    }
  `
  const CheckboxContainer = styled.div`
    display: inline-block;
    vertical-align: middle;
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
        The state is now {checked.toString()}
      </label>
    </div>
  )
}