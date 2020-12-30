import React from 'react'
import styled from 'styled-components'
    
  export const CustomCheckbox = ({ className, checked, ...props }) => (
    <CheckboxContainer>
      <HiddenCheckbox checked={checked} {...props}></HiddenCheckbox>
      <StyledCheckbox checked={checked}>
        <Icon viewBox=" 0 0 24 24">
          <polyline points="20 4 9 17 4 12"></polyline>
        </Icon>
      </StyledCheckbox>
    </CheckboxContainer>
  )

// This CSS will result in a hidden checkbox that is accessible 
//by a screenreader. It is rendered off-screen.
  const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
    border: 0;
    clip: rect(0 0 0 0);
    clippath: insert(50%);
    height: 1px;
    width: 1px;
    margin: -1;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
  `;

  //The checkmark:
  const Icon = styled.svg`
    fill: none; 
    stroke: white;
    stroke-width: 2px;
  `;

  // This is the styled checkbox that will show on the page:
  const StyledCheckbox = styled.div`
    display: inline-block;
    width: 18px;
    height: 18px;
    background: ${(props) => (props.checked ? '#034D88' : '#fff')};
    border-radius: 9px;
    border: 2px solid #606060;
    cursor: pointer;
    transition: all 150ms;
    ${Icon} {
      visibility: ${(props) => (props.checked ? 'visible' : 'hidden')}
    }
  `;

  const CheckboxContainer = styled.div`
    display: inline-block;
    vertical-align: middle;
    margin: 10px;
  `;
  