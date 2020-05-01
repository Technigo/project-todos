import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

export const CustomCheckbox = () => {
  const dispatch = useDispatch()
  const [checked, setChecked] = useState(false)

  const handleCheckboxClick = (event) => {
    setChecked(event.target.checked)
  }

  const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
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

  const VisibleCheckbox = styled.div`
    display: inline-block;
    width: 16px;
    height: 16px;
    background: ${props => props.checked ? 'salmon' : 'white'};
    border-radius: 3px;
    transition: all 150ms;
  `

  const CheckboxContainer = styled.div`
    display: inline-block;
    vertical-align: middle;
  `

  const Checkbox = ({ className, checked, ...props }) => (
    <CheckboxContainer>
      <HiddenCheckbox checked={checked} {...props}></HiddenCheckbox>
      <VisibleCheckbox checked={checked}></VisibleCheckbox>
    </CheckboxContainer>
  )

  return (
    <>
      <div>
        <label>
          <Checkbox checked={checked} onChange={handleCheckboxClick} />
        </label>
      </div>
    </>
  )
}
