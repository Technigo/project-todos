import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { todoStore } from '../reducers/todoStore'
import styled from 'styled-components'

export const CustomCheckbox = ({ isChecked, onChangeHandler }) => {
  const dispatch = useDispatch()
  const [checked, setChecked] = useState(false)

  const handleOnChange = (event) => {
    setChecked(event.target.checked)
  }

  const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
    border:0;
    clip:rect(0 0 0 0);
    clippath:inset (50%);
    height:1px;
    margin:-1px;
    overflow:hidden;
    padding:0;
    position:absolute;
    white-space:nowrap;
    width:1px;
  `
  const Circle = styled.svg`
 
`

  const StyledCheckbox = styled.div`
    display: inline-block;
    width: 32px;
    height: 32px;
    background: #FFE1D6;
    border-radius: 50%;
    transition: all 150ms;
    ${Circle} {
      visibility: ${(props) => (props.checked ? 'visible' : 'hidden')};
    }
`
  const CheckBoxContainer = styled.div`
    display:inline-block;
    vertical-align:middle;
`


  const Checkbox = ({ className, checked, ...props }) => (
    <CheckBoxContainer>
      <HiddenCheckbox checked={checked} {...props}></HiddenCheckbox>
      <StyledCheckbox checked={checked}>
        <Circle viewBox='0 0 24 24'>
          <circle cx='12' cy='12' r='6' stroke='#F67280' fill='#6C567B'></circle>
        </Circle>
      </StyledCheckbox>

    </CheckBoxContainer>
  )

  return (
    <div>
      <label>
        <Checkbox checked={checked} onChange={handleOnChange}></Checkbox>
      </label>

    </div>
  )
}

