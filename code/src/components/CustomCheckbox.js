import React, { useState } from 'react';
import styled from 'styled-components';

// -----------------------------------------------------------------------------

export const CustomCheckbox = ({ isChecked, onChangeHandler }) => {
  const [checked, setChecked] = useState(isChecked);

  const handleOnChange = (event) => {
    onChangeHandler(event);
    setChecked(event.target.checked);
  };

  const Checkbox = ({ className, checked, ...props }) => (
    <CheckboxContainer>
      <HiddenCheckbox checked={checked} {...props}></HiddenCheckbox>
      <StyledCheckbox checked={checked}>
        <CheckedSign>✓</CheckedSign>
      </StyledCheckbox>
    </CheckboxContainer>
  );

  return (
    <label>
      <Checkbox
        checked={checked}
        onChange={(event) => handleOnChange(event)}
      ></Checkbox>
    </label>
  );
};

// Local styles -----------------------------
const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0, 0, 0, 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

const CheckedSign = styled.p`
  color: ${(props) => (props.checked ? 'white' : '#4300ca')};

  &:hover {
    color: #fff;
  }
`;

const StyledCheckbox = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  background: ${(props) => (props.checked ? '#4300ca' : '#f5f1fc')};
  border-radius: 50%;
  &:hover {
    background: #4300ca;
    ${CheckedSign} {
      color: #fff;
    }
  }
`;
