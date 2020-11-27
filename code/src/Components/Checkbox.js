import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

export const Checkbox = () => {
const dispatch = useDispatch()
const [checked, setChecked] = useState(false)

const handleCheckboxClick = event => {
    setChecked(event.target.checked)
}

const HiddenCheckbox = styled.input.attrs({type: 'checkbox'})`
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
const StyledCheckbox = styled.div`
display: inline-block;
width: 16px;
height: 16px;
border: 1px solid #FAFAE5;
background: ${props => props.checked ? '#3DA994' : '#63C6B4'}
border-radius: 3px;
transition: all 150ms;
`

const CheckboxContainer = styled.div`
display: inline-block;
vertical-align: middle;`


const Checkbox = ({className, checked, ...props}) => (
    <CheckboxContainer>
        <HiddenCheckbox checked={checked} {...props}></HiddenCheckbox>
        <StyledCheckbox checked={checked}></StyledCheckbox>
    </CheckboxContainer>
)

  return (
    <div>
      <label>
         <Checkbox checked={checked} onChange={handleCheckboxClick}></Checkbox> 
      </label>
    </div>
  )
}
