import React, { useState } from 'react';
import styled from 'styled-components';

export const CustomCheckbox = ({ isChecked, onChangeHandler }) => {
  // The checked value on the checkbox is initialized with the isChecked value
  // we got sent as a prop from ListItem. This state will change to its opposite
  // once the checkbox is changed again and the handleOnChange action is dispatched
  const [checked, setChecked] = useState(isChecked);

  // handleOnChange calls the onChangeHandler function we got sent as a prop from 
  // ListItem. This onChangeHandler is the action being dispatched in order to change
  // the complete property on the task
  const handleOnChange = event => {
    onChangeHandler();
    setChecked(event.target.checked);
  };

  // Creates a checkbox that is still accesible because it renders via offscreen
  // This checkbox does not render but maintains the functionality we need
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
  `;

  const Icon = styled.svg`
    fill: none;
    stroke: white;
    stroke-width: 2px;
  `;

  // This is the styled checkbox that will be displayed
  const StyledCheckbox = styled.div`
    display: inline-block;
    width: 16px;
    height: 16px;
    border: ${props => props.checked ? '2px solid #fe97a7' : '2px solid #808080'};
    background: ${props => props.checked ? '#fe97a7' : 'white'};
    border-radius: 3px;
    transition: all 150ms;
    cursor: pointer;

    ${Icon} {
      visibility: ${props => props.checked ? 'visible' : 'hidden'};
    }

    // Makes sure custom checkbox is focusable with keyboard and add a border
    // to make that visible
    ${HiddenCheckbox}:focus + & {
      border: 2px solid black;
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
  );
};
