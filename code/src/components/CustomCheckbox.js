import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

// A nested component. A function that takes in props and renders an input type = checkbox. 
// It is rendering a TYPE checkbox and not a STYLED checkbox. We will eventually return a styled
// checkbox.
// Anything we send in as an attribute below in styled Checkbox, comes out at 
// props the function Checkbox can use.
// {...props} = add these props inside the input.

// This next line of code was replaced with the const Checkbox below:
//const Checkbox = (props) => <input type='checkbox'{...props}></input>

// A nested function? Creates a styled, hidden but accessible checkbox. Accessible
// since it is rendered off screen. ??
const HiddenCheckBox = styled.input.attrs({ type: 'checkbox' })`
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

// Need both for accessibility.
const StyledCheckBox = styled.div`
  display: inline-block;
  width: 35px;
  height: 35px;
  margin-right: 10px;
  background: ${props => props.checked ? 'pink' : 'grey'};
  border-radius: 3px;
  transition: all 150ms;
  ${Icon} {
    visibility: ${(props) => (props.checked ? 'visible' : 'hidden')};
  }
`;

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

// Tripple-nested div with two components inside. Re-building a checkbox.

// Normal functional component
export const CustomCheckbox = () => {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);

  // Updating the state on change
  const handleOnChange = (event) => {
    setChecked(event.target.checked);
  };

  // Drawing a line with the svg.
  const Checkbox = ({ className, checked, ...props }) => (
    <CheckboxContainer>
      <HiddenCheckBox checked={checked} {...props}></HiddenCheckBox>
        <StyledCheckBox checked={checked}>
          <Icon viewBox='0 0 24 24'>
            <polyline points='20 6 9 17 4 12'/>
          </Icon>
        </StyledCheckBox>
    </CheckboxContainer>
  )

  // {...props} allow us to add properties directly to the HiddenCheckBox. 
  // Remember! The HiddenCheckBox is the INPUT TYPE checkbox.

  // {} means that there is a function inside. 
  return (
    <label>
      <Checkbox checked={checked} onChange={handleOnChange}></Checkbox> 
    </label>
  )
};
