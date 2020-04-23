import React, { useState } from 'react'
import styled from 'styled-components/macro'


export const CustomCheckbox = ({ isChecked, onChangeHandler }) => {
  const [checked, setChecked] = useState(isChecked)

  const handleOnChange = (event) => {
    onChangeHandler()
    setChecked(event.target.checked)
  }

  const Checkbox = ({ className, checked, ...props }) => (
    <CheckboxContainer>
      <HiddenCheckbox checked={checked} {...props}></HiddenCheckbox>
      <StyledCheckbox checked={checked}>
        <Icon viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </Icon>
      </StyledCheckbox>
    </CheckboxContainer>
  )

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

  const Icon = styled.svg`
    fill:none;
    stroke: white;
    stroke-width:2px;
  `
  const StyledCheckbox = styled.div`
    margin-top: 13px;
    display: inline-block;
    width: 18px;
    height: 18px;
    background: ${props => props.checked ? '#F24957' : 'white'};
    border: solid #F24957 2px;
    border-radius: 50px;
    transition: all 150ms;
    opacity: 0.8;
    ${Icon} {
      visibility: ${(props) => (props.checked ? 'visible' : 'hidden')};
    }
  `

  const CheckboxContainer = styled.div`
    display: inside-block;
    vertical-align: middle;
  `

  return (
    <div>
      <label>
        <Checkbox checked={checked} onChange={handleOnChange}></Checkbox>
      </label>
    </div>
  )
}