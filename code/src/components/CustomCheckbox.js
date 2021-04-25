import React from 'react'
import styled from 'styled-components'

//Styled components
const Input = styled.input`
  height: 35px;
  width: 35px;
  z-index: 1;
  opacity: 0;
  cursor: pointer;
`

const Indicator = styled.div`
  box-sizing: border-box;
  width: 35px;
  height: 35px;
  margin-left: 5px;
  position: absolute;
  border-radius: 50%;
  border: 2px solid #8B98F9;

  &::before {
    content: '';
    width: 35px;
    height: 35px;
    position: absolute;
    border-radius: 50%;
    background-color: #8B98F9;
    display: none;
    top: -1.5px;
    left: -2px;
  }
  &::after {
    content: '';
    position: absolute;
    width: 8px;
    height: 16px;
    border: solid #fff;
    border-width: 0 4px 4px 0;
    top: 4px;
    left: 10px;
    transform: rotate(45deg);
    display: none;
  }
  ${Input}:checked + &::after {
    display: block;
  }
  ${Input}:checked + &::before {
    display: block;
  }
`

const CustomCheckbox = ({ complete, onToggleComplete }) => {
  return (
    <>
      <Input
        type="checkbox"
        checked={complete}
        onChange={onToggleComplete}
      />
      <Indicator />
    </>
  )
}

export default CustomCheckbox