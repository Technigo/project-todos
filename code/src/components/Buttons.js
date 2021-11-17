import React from 'react'
import styled from 'styled-components/macro'

const StyledButton = styled.button`
  background: var(--red);
  color: var(--white);
  font-family: inherit;
  padding: 0.6em 1.3em;
  font-weight: 900;
  font-size: 18px;
  border: 3px solid var(--brown);
  border-radius: 0.4em;
  box-shadow: var(--brown) 0.1em 0.1em;

  &:hover {
    transform: translate(-0.05em, -0.05em);
    box-shadow: var(--brown) 0.15em 0.15em;
    background-color: purple;
  }
 
  &:active {
    transform: translate(0.05em, 0.05em);
    box-shadow: var(--brown) 0.05em 0.05em;
  }
`

const Buttons = ({ text }) => <StyledButton>{text}</StyledButton>

export default Buttons
