/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-shadow */
import React, { useState } from 'react'
import styled from 'styled-components'

export const CustomCheckbox = ({ isChecked, onChangeHandler }) => {
  const [checked, setChecked] = useState(isChecked)

  const handleOnChange = (event) => {
    onChangeHandler()
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
  // checkmark
  const Icon = styled.svg`
    fill: none;
    stroke: white;
    stroke-width: 2px;
  `

  const StyledCheckbox = styled.div`
    margin: 7px;
    display: inline-block;
    width: 30px;
    height: 30px;
    background: ${(props) => (props.checked ? '#ccc' : 'salmon')};
    border-radius: 3px;
    transition: all 150ms;
    ${Icon} {
      visibility: ${(props) => (props.checked ? 'visible' : 'hidden')}
    }
  `

  const CheckboxContainer = styled.div`
    display: inline-block;
    vertical-align: middle;
  `

  const Checkbox = ({ className, checked, ...props }) => (
    <CheckboxContainer>
      <HiddenCheckbox checked={checked} {...props} />
      <StyledCheckbox checked={checked}>
        <Icon viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </Icon>
      </StyledCheckbox>
    </CheckboxContainer>
  )

  return (
    <div>
      <label>
        <Checkbox checked={checked} onChange={handleOnChange} />
      </label>
    </div>
  )
}