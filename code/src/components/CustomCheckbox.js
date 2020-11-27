import React, { useState } from 'react';

import { 
  StyledCheckbox,
  CheckboxContainer, 
  HiddenCheckBox, 
  Icon 
} from 'styledComponents/form';

export const CustomCheckbox = ({ isChecked, onChangeHandler }) => {
  const [checked, setChecked] = useState(isChecked) 

  const handleOnChange = event => {
    onChangeHandler()
    setChecked(event.target.checked)
  }

  /*creates the checkbox component below*/
  const Checkbox = ({className, checked, ...props}) => (
    <CheckboxContainer>
      <HiddenCheckBox checked={checked} {...props}></HiddenCheckBox>
      <StyledCheckbox checked={checked}>
        <Icon viewBox='0 0 24 24'>
          <polyline points='20 6 9 17 4 12'/>
        </Icon> 
      </StyledCheckbox>
    </CheckboxContainer>
  )

  return (
    <div>
      <label>
        <Checkbox checked={checked} onChange={handleOnChange}/>
      </label>
    </div>
  )
} 