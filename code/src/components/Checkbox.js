/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import styled from 'styled-components'
import Checkmark from '../images/checkmark.png'

export const Checkbox = ({ className, checked, ...props }) => (
  <CheckboxContainer className={className}>
    <HiddenCheckbox checked={checked} {...props} />
    <StyledCheckbox checked={checked}>
      <Icon src={Checkmark} />
    </StyledCheckbox>
  </CheckboxContainer>
)

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`
// Custom styled icon
const Icon = styled.img`
 height: 28px;
 width: 28px;
`
// Hide checkbox visually but remain accessible to screen readers.
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

const StyledCheckbox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 18px;
  height: 18px;
  background: ${(props) => (props.checked ? '#FF847C' : '#f0ece2')};
  border-radius: 3px;
  transition: all 150ms;
  border: solid 2px #FF847C;

  ${HiddenCheckbox}:hover + & {
    cursor: pointer;
  }

  ${Icon} {
    visibility: ${(props) => (props.checked ? 'visible' : 'hidden')}
  }
`
