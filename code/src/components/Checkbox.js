import React from 'react'
import { useState } from 'react'

import { CheckboxContainer, HiddenCheckbox, Icon, StyledCheckbox } from '../styling/CheckboxStyling'

export const CheckBox = ({ isChecked, onChange }) => {
  const [checked, setChecked] = useState(isChecked)

  const handleChange = event => {
    onChange();
    setChecked(event.target.checked);
  }

  const Checkbox = ({ className, checked, ...props }) => (
    <CheckboxContainer className={className}>
      <HiddenCheckbox checked={checked} {...props} />
      <StyledCheckbox checked={checked}>
        <Icon viewBox='0 0 24 24'>
          <polyline points='20 6 9 17 4 12' />
        </Icon>
      </StyledCheckbox>
    </CheckboxContainer>
  )

  return( 
    <label>
      <Checkbox checked={checked} onChange={handleChange}></Checkbox>
    </label>
  )
}

