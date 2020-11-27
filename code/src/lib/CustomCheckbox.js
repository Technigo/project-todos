import React from 'react';

import styled from 'styled-components';

const CustomCheckbox = ({ className, checked, ...props }) => (
  <CheckboxContainer className={className}>
    <HiddenCheckbox className="hiddencheck" checked={checked} {...props} />
    <StyledCheckbox checked={checked}>
      <Icon viewBox="0 0 24 24">
        <polyline points="20 6 9 17 4 12"/>
      </Icon>
    </StyledCheckbox>
  </CheckboxContainer>
);
export default CustomCheckbox;

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;

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
  pointer: cursor;
`;

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 2px solid ${props => (props.checked ? '#3d5f6b' : '#3d5f6b')};
  background: ${props => (props.checked ? '#3d5f6b' : '#fff')};
  border-radius: 50%;
  transition: all 150ms;
  cursor: pointer;
  
  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 2px pink;
  }

  ${Icon} {
    visibility: ${props => (props.checked ? 'visible' : 'hidden')};
  }

  @media (min-width: 668px) {
    width: 30px;
  height: 30px;
  }
`;