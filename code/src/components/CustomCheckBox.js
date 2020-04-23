import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { tasks } from 'reducers/tasks';
import styled from 'styled-components';

export const CustomCheckbox = ({ isChecked, onChangeHandler }) => {
  const [checked, setChecked] = useState(isChecked);

  const handleOnChange = (event) => {
    onChangeHandler();
    setChecked(event.target.checked);
  }

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

  const Icon = styled.svg`
    fill: none;
    stroke: black;
    stroke-width: 2px;
  `

  const StyledCheckbox = styled.div`
    width: 30px;
    height: 30px;
    background: ${(props) => (props.checked ? 'lightgrey' : 'white')};
    border-radius: 50%;
    transition: all 150ms;
    ${Icon} {
      visibility: ${(props) => (props.checked ? 'visible' : 'hidden')};
    }
  `

  const CheckboxContainer = styled.div`
  `

  const Checkbox = ({ className, checked, ...props }) => (
    <CheckboxContainer>
      <HiddenCheckbox checked={checked} {...props}></HiddenCheckbox>
      <StyledCheckbox checked={checked}>
        <Icon viewBox="0 0 24 24">
          <polyline points="20 7 9 17 4 12" />
        </Icon>
      </StyledCheckbox>
    </CheckboxContainer>
  )

  return (
    <div>
      <label>
        <Checkbox checked={checked} onChange={handleOnChange}></Checkbox>
      </label>
    </div>
  )
}