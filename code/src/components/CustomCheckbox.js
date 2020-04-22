import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { tasklist } from 'reducers/tasklist'
import styled from 'styled-components'

export const CustomCheckbox = () => {
  const dispatch = useDispatch()
  const [checked, setChecked] = useState(false)

  const handleOnChange = (event) => {
    setChecked(event.target.checked)
  }

  const Checkbox = (props) => <input type='checkbox' {...props}></input>

  const HiddenCheckBox = styled.input.attrs({type: 'checkbox'})`
    border: 0;
    clip: rect(0000);
    clippath: inset(50%);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  `
  const StyledCheckBox = styled.div`
    display: inline-block;
    width: 16px;
    height: 16px;
    background: ${(props) => (props.checked ? 'salmon' : 'papayawhip')};
    border-radius: 3px;
    transition: all 150ms;
    ${Icon} {
      visibility: ${(props) => (props.checked ? 'visible' : 'hidden')};
    }

  `

  return (
    <div>
      <label>
        <Checkbox checked={checked} onChange{handleOnChange}></Checkbox>
      </label>
    </div>
  )
}