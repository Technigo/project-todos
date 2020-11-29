import React, { useState } from 'react'

import styled from 'styled-components'

export const CheckBox = ({ isChecked, onChangeHandler }) => {
  const [checked, setChecked] = useState(isChecked)

  const handleOnChange = event => {
    onChangeHandler()
    setChecked(event.target.checked)
  }

  const Checkbox = ({ className, checked, ...props }) => (
    <CheckboxContainer>
      <HiddenCheckbox checked={checked} {...props}></HiddenCheckbox>
      <StyledCheckbox checked={checked}>
        <Icon viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </Icon>
      </StyledCheckbox>
    </CheckboxContainer>
  );

  return (
    <div>
      <label>
        <Checkbox
          checked={checked}
          onChange={handleOnChange}>
        </Checkbox>
      </label>
    </div>
  );
};

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
 `

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })` 
  border: 0;
  clip:rect();
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 25px;
  height: 25px;
  margin-right: 20px;
  border: 1px solid grey;
  background: ${(props) => (props.checked) ? '#3CB371' : '#fdc1c5'};
  transition: all 150ms; 
  ${Icon} {
      visibility: ${props => (props.checked ? 'visible' : 'hidden')}
    }
`
const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`