import React, { useState } from 'react'
import { 
  Dot,
  HiddenCheckBox,
  CheckboxContainer,
  StyledCheckBox
} from './styled/checkbox'

export const Checkbox = ({ isChecked, onChangeHandler }) => {
  const [checked, setChecked] =useState(isChecked)

  const handleOnChange = event => {
    onChangeHandler()
    setChecked(event.target.checked)
  }

  const Checkbox = ({ className, checked, ...props }) => (
    <CheckboxContainer>
      <HiddenCheckBox checked={checked} {...props}></HiddenCheckBox>
      <StyledCheckBox checked={checked}>
        <Dot viewBox='0 0 24 24'>
          <circle cx='12' cy='12' r='4' stroke='none' fill='#F9EFE5'></circle>
        </Dot>
      </StyledCheckBox>
    </CheckboxContainer>
  )

  return (
    <div>
      <label>
        <Checkbox checked={checked} onChange={handleOnChange}></Checkbox>
      </label>
    </div>
  )
}
