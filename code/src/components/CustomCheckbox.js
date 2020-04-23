import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { todoStore } from '../reducers/todoStore'
import styled from 'styled-components'

export const CustomCheckbox = ({ isChecked, onChangeHandler }) => {
  const dispatch = useDispatch()
  const [checked, setChecked] = useState(false)

  const handleOnChange = (event) => {
    onChangeHandler()
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
  const StyledCheckbox = styled.div`
    display: inline-block;
    width: 32px;
    height: 32px;
    background: ${(props) => (props.checked ? 'red' : 'blue')}
    border-radius: ${(props) => (props.checked ? '12px' : '3px')};
    transition: all 150ms;
  }
`
  const CheckBoxContainer = styled.div`
    display:inline-block;
    vertical-align:middle;
`



  const Checkbox = ({ className, checked, ...props }) => (
    <CheckBoxContainer>
      <HiddenCheckbox checked={checked} {...props}></HiddenCheckbox>
      <StyledCheckbox checked={checked}></StyledCheckbox>
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

