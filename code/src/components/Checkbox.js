import React, { useState } from 'react'
import { 
  Dot,
  CheckBox,
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
      <CheckBox checked={checked} {...props}></CheckBox>
      <StyledCheckBox checked={!checked}>
        <Dot viewBox='0 0 24 24'>
          <circle cx='12' cy='12' r='4' stroke='none' fill='#16F712'></circle>
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
