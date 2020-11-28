//For this somewhat complicated Checkbbox component, I have used this article: https://medium.com/@colebemis/building-a-checkbox-component-with-react-and-styled-components-8d3aa1d826dd 
//Which I modifed to fit my project
import React, { useState } from 'react';
import styled from 'styled-components';

export const Checkbox = ({ isChecked, onChangeHandler }) => {
  const [checked, setChecked] = useState(isChecked);

  const handleOnChange = event => {
    onChangeHandler();
    setChecked(event.target.checked);
  };

  const CheckboxIsHidden = styled.input.attrs({ type: 'checkbox' })`
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

  const CheckboxIcon = styled.svg`
    fill: none;
    stroke: white;
    stroke-width: 2px;
  `;

  const StyledCheckbox = styled.div`
    display: inline-block;
    width: 16px;
    height: 16px;
    border: ${props => props.checked ? '2px solid #f4b990' : '2px solid #000000'};
    background: ${props => props.checked ? '#f4b990' : 'white'};
    border-radius: 3px;
    transition: all 150ms;
    cursor: pointer;
    ${CheckboxIcon} {
      visibility: ${props => props.checked ? 'visible' : 'hidden'};
    }
    ${CheckboxIsHidden}:focus + & {
      border: 2px solid black;
  }
  `;

  const CheckboxContainer = styled.div`
    display: inline-block;
    vertical-align: middle;
  `;

  const Checkbox = ({ className, checked, ...props }) => (
    <CheckboxContainer>
      <CheckboxIsHidden checked={checked} {...props}></CheckboxIsHidden>
      <StyledCheckbox checked={checked}>
        <CheckboxIcon viewBox="0 0 24 24">
          <polyline points="20 5 9 17 4 12" />
        </CheckboxIcon>
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