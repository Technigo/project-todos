import React, { useState } from 'react'
import styled from 'styled-components'
import { todos } from "../reducers/todos.js"

export const Checkbox = ({ isChecked, onChange }) => {
  const [checked, setChecked] = useState(isChecked);

  const handleOnChange = (event) => {
    onChange()
    setChecked(event.target.checked);
  };
  //This is the "original" checkbox, hidden outside the screen
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

  // This is the checkmark
  const Icon = styled.svg`
    fill: none;
    stroke: white;
    stroke-width: 2px;
  `;

  //Custom checkbox that will show on screen
  const StyledCheckbox = styled.div`
    display: inline-block;
    width: 22px;
    height: 22px;
    padding: 4px;
    margin-right: 6px;
    border-radius: 50%;
    border: ${(props) => (props.checked ? 'none' : '1px solid #535c68')};
    background: ${(props) => (props.checked ? '#40407a' : 'white')};
    ${Icon} {
    visibility: ${(props) => (props.checked ? 'visible' : 'hidden')};
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
          <polyline points="20 4 9 17 4 12" />
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