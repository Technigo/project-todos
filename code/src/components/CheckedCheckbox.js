import React, { useState } from 'react';
import styled from 'styled-components';

export const CheckedCheckbox = ({ isChecked, onChangeHandler}) => {
  const [checked, setChecked] = useState(isChecked);

  const Container = styled.div`
    display: flex;
    justify-content; center;
    margin-left: 5px;
  `;

  const Icon = styled.svg`
    fill: none;
    stroke: black;
    stroke-width: 2px;
  `;

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

  const StyledCheckbox = styled.div`
    margin: 2px 2px 0 0;
    display: inline-block;
    width: 15px;
    height: 15px;
    background: ${props => props.checked ? 'whitesmoke' : 'whitesmoke'};
    border: 1px solid black;
    border-radius: 50%;
    transition: all 150ms;
    ${Icon} {
      visibility: ${props => props.checked ? 'visible' : 'hidden'}
    }
  `;


  const handleOnChange = event => {
    onChangeHandler();
    setChecked(event.target.checked);
  };

  const Checkbox = ({ checked, ...props }) => (
    <Container>
      <HiddenCheckbox checked={checked} {...props}></HiddenCheckbox>
      <StyledCheckbox checked={checked}>
        <Icon viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </Icon>
      </StyledCheckbox>
    </Container>
  );

  return (
    <div>
      <label>
        <Checkbox checked={checked} onChange={handleOnChange}></Checkbox>
      </label>
    </div>
  );
};