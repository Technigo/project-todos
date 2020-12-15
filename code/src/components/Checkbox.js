import React from 'react';
import { useState } from 'react';

import styled from 'styled-components'

export const CheckBox = ({ isChecked, onChange }) => {
  const [checked, setChecked] = useState(isChecked);

  const handleChange = event => {
    onChange();
    setChecked(event.target.checked);
  };

  //for the checkbox styling I checked an article on medium and adapted it to my code
  const CheckboxContainer = styled.div`
    display: inline-block;
    vertical-align: middle;
`

  const Icon = styled.svg`
    fill: none;
    stroke: white;
    stroke-width: 2px;
`

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

  const StyledCheckbox = styled.div`
    width: 20px;
    height: 20px;
    margin-top:5px;
    background: ${props => (props.checked ? '#1ba341' : '#e6e6e6')};
    border-radius: 3px;
    transition: all 150ms;
    cursor: pointer;

    ${Icon} {
      visibility: ${props => (props.checked ? 'visible' : 'hidden')}
    };
`

  const Checkbox = ({ className, checked, ...props }) => (
    <CheckboxContainer className={className}>
      <HiddenCheckbox checked={checked} {...props} />
      <StyledCheckbox checked={checked}>
        <Icon viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </Icon>
      </StyledCheckbox>
    </CheckboxContainer>
  );

return( 
  <div>
    <label>
      <Checkbox checked={checked} onChange={handleChange}></Checkbox>
    </label>
  </div>
);
};
