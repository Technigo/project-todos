import React, { useState } from "react";
// import { useDispatch } from "react-redux";
import styled from "styled-components";

// normal functional comp
export const CustomCheckbox = () => {
  // const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);

  //  this is a functional component in a component, custom made checkbox
  const Checkbox = ({ className, checked, ...props }) => (
    <CheckboxContainer>
      <HiddenCheckbox checked={checked} {...props}></HiddenCheckbox>
      <StyledCheckbox checked={checked}>
        <Svg viewBox="0 0 24 24">
          <polyline points="20 3 9 17 4 11" />
        </Svg>
      </StyledCheckbox>
    </CheckboxContainer>
  );

  const handleOnChange = (event) => {
    setChecked(event.target.checked);
    //   console.log(checked)
  };

  const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
    border: 0;
    clip: rect(0 0 0 0);
    clippath: insert(50%);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  `;

  //  The checkmark, is defined here
  const Svg = styled.svg`
    fill: none;
    stroke: black;
    stroke-width: 2px;
  `;

  const StyledCheckbox = styled.div`
    display: inline-block;
    width: 24px;
    height: 24px;
    background: ${(props) => (props.checked ? "#90ee90" : "#FFB6C1")};
    border: solid 1px;
    border-radius: 4px;
    transition: all 150ms;
    ${Svg} {
      visibility: ${(props) => (props.checked ? "visible" : "hidden")};
    }
  `;

  const CheckboxContainer = styled.div`
    display: inline-block;
    vertical-align: middle;
  `;

  return (
    <div>
      <label>
        <Checkbox checked={checked} onChange={handleOnChange}></Checkbox>
      </label>
    </div>
  );
};
