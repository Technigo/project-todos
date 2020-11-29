import React, {useState} from "react";
import styled from "styled-components";

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  border: 0;
  clip: rect(0 0 0 0)
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
  stroke: white;
  stroke-width: 3px;
`

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  background:${(props) => (props.checked ? "#4D5E58" : "white")};
  border-radius: 25px;
  transition: all 150ms;
  padding: 2px;

  &:hover {
    background-color: #4D5E58;
  }

  ${Icon} {
    visibility: ${props => (props.checked ? "visibile" : "hidden")}; 
  }
`
const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`
export const CustomCheckbox = ({ isChecked, onChangeHandler }) => {
  const [checked, setChecked] = useState(isChecked);

  const handleOnChange = event => {
    onChangeHandler()
    setChecked(event.target.checked);
  };

  const Checkbox = ({ className, checked, ...props }) => 
  <CheckboxContainer>
    <HiddenCheckbox checked={checked} {...props}></HiddenCheckbox>
    <StyledCheckbox checked={checked}>
      <Icon viewBox="0 0 24 24">
        <polyline points="20 3 9 17 4 12"/>
      </Icon>
    </StyledCheckbox>
  </CheckboxContainer>

  return (
    <div>
      <label>
        <Checkbox 
          checked={checked} 
          onChange={handleOnChange}>
        </Checkbox>
      </label>
    </div>
  )
};
