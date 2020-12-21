import React, { useState } from 'react'

import { Icon, CheckboxContainer, HiddenCheckbox, StyledCheckbox } from "../styling/styleCheckBox"

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
  )

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

