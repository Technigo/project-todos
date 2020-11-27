import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

export const CustomCheckbox = ({ isChecked, onChangeHandler }) => {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);

  const handleOnChange = event => {
    onChangeHandler();
    setChecked(event.target.checked);
  };

  const Checkbox = ({ className, checked, ...props }) => (
    <CheckboxContainer>
      <HiddenCheckbox checked={checked} {...props}></HiddenCheckbox>
      <StyledCheckbox checked={isChecked}>
        <Icon viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </Icon>
      </StyledCheckbox>
    </CheckboxContainer>
  );

  return (
    <div>
      <label>
        <Checkbox checked={checked} onChange={handleOnChange}></Checkbox>
        {/* {label} */}
      </label>
    </div>
  );
};

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
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
  stroke: #fff;
  stroke-width: 4px;
`;

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 18px;
  height: 18px;
  background: ${props => (props.checked ? "#0099ff" : "#fff")};
  border: 1px solid #0099ff;
  border-radius: 50%;
  transition: all 150ms;
  ${Icon} {
    visibility: ${props => (props.checked ? "visible" : "hidden")};
  }
`;

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;
