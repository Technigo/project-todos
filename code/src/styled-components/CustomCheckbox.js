import React, { useState } from 'react';
import styled from 'styled-components';

export const CustomCheckbox = ({ isChecked, onChangeHandler }) => {
  const [checked, setChecked] = useState(isChecked);

  const handleOnChange = event => {
    onChangeHandler();
    setChecked(event.target.checked);
  };

  // Creates a checkbox that is still accesible because it renders via offscreen
  // This checkbox does not render but maintains the functionality we need
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
  `;

  const Icon = styled.svg`
    fill: none;
    stroke: white;
    stroke-width: 2px;
  `;

  const StyledCheckbox = styled.div`
    display: inline-block;
    width: 16px;
    height: 16px;
    background: ${props => props.checked ? 'salmon' : 'grey'};
    border-radius: 3px;
    transition: all 150ms;
    ${Icon} {
      visibility: ${props => props.checked ? 'visible' : 'hidden'};
    }
  `;

  const CheckboxContainer = styled.div`
    display: inline-block;
    vertical-align: middle;
  `;

  const Checkbox = ({ className, checked, ...props }) => (
    <CheckboxContainer>
      <HiddenCheckbox checked={checked} {...props}></HiddenCheckbox>
      <StyledCheckbox checked={checked}>
        <Icon viewBox="0 0 24 24">
            <polyline points="20 5 9 17 4 12" />
          </Icon>
      </StyledCheckbox>
    </CheckboxContainer>
  );

  return (
    <div>
      <label>
        <Checkbox checked={checked} onChange={handleOnChange}></Checkbox>
      </label>
    </div>
  )
};
