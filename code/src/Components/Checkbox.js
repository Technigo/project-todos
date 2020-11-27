import React, { useState } from 'react'

import {
  HiddenCheckbox,
  StyledCheckbox,
  CheckboxContainer,
  Icon,
} from '../Styles/CostumCheckbox'

export const Checkbox = ({ done, onChangeHandler }) => {
  const [checked, setChecked] = useState(done)

  const handleOnChange = (event) => {
    onChangeHandler()
    setChecked(event.target.checked)
  }

  const CustomizedCheckbox = ({ ...props }) => (
    <CheckboxContainer>
      <HiddenCheckbox checked={checked} {...props}></HiddenCheckbox>
      <StyledCheckbox checked={checked}>
        <Icon viewBox='0 0 24 24'>
          <polyline points='20 6 9 17 4 12' />
        </Icon>
      </StyledCheckbox>
    </CheckboxContainer>
  )

  return (
    <div>
      <label>
        <CustomizedCheckbox
          checked={checked}
          onChange={handleOnChange}
        ></CustomizedCheckbox>
      </label>
    </div>
  )
}
