import React, { useState } from 'react'
import styled from 'styled-components'


export const CustomCheckBox = ({ isChecked, onChangeHandler }) => {
  const [checked, setChecked] = useState(isChecked)

  const handleOnChange = (event) => {
    onChangeHandler();
    setChecked(event.target.checked)
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
  const Icon = styled.svg`
    fill: none;
    stroke: black;
    stroke-width: 2px;
  `
  const StyledCheckbox = styled.div`
    width: 30px;
    height: 30px;
    background-color: white;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.3s;
    ${Icon} {
      visibility: ${(props) => (props.checked ? 'visible' : 'hidden')};
    }
    &:hover {
      box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
   }
  `

  const Checkbox = ({ className, checked, ...props }) => (
    <section>
      <HiddenCheckbox checked={checked} {...props}></HiddenCheckbox>
      <StyledCheckbox checked={checked}>
        <Icon viewBox='0 0 24 24'>
          <polyline points='20 7 9 17 4 12' />
        </Icon>
      </StyledCheckbox>
    </section>
  )

  return (
      <label>
        <Checkbox checked={checked} onChange={handleOnChange} />  
      </label>
  )
}