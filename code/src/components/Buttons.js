import React from 'react'
import styled from 'styled-components/macro'

const StartButton = styled.button`
  background: var(--lax);
  color: var(--white);
  font-family: inherit;
  padding: 0.6em 1.3em;
  font-weight: 900;
  font-size: 18px;
  border: 3px solid var(--brown);
  border-radius: 0.4em;
  cursor: pointer;

  &:hover {
    transform: translate(-0.05em, -0.05em);
    box-shadow: var(--brown) 0.15em 0.15em;
  }
 
  &:active {
    transform: translate(0.05em, 0.05em);
    box-shadow: var(--brown) 0.05em 0.05em;
  }
`
const AddTaskButton = styled.button`
  display: block;
  width: 100%;
  height: 30px;
  margin-top: 3px;
  background: var(--lax);
  color: var(--white);
  font-family: inherit;
  font-size: 14px;
  border: 1px solid var(--brown);
  border-radius: 0.4em;
  padding: 0 3px;
  cursor: pointer;
`

export const StartBtn = ({ text }) => <StartButton>{text}</StartButton>
export const AddBtn = ({ text, onClick, type, disabled }) => 
  <AddTaskButton 
    type={type}
    disabled={disabled}
    onClick={onClick}
  >{text}
  </AddTaskButton>


