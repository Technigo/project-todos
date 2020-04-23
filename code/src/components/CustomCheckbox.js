import React, { useState } from 'react';
import { todos } from 'reducers/todos'
import styled from 'styled-components';

// Receives function as a prop for reusability
export const CustomCheckbox = ({ isChecked, onChangeHandler }) => {
  const [checked, setChecked] = useState(isChecked)

  // Use the function onChangeHandler from TodoItem
  const handleOnChange = (event) => {
    onChangeHandler()
    setChecked(event.target.checked)
  }
  // Hidden/invisible offscreen checkbox that can still be accessable by screen readers and focus
  const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inseth(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
  `

  // This is the checkmark
  // Needs to be difined before using it
  const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
  `
  // The visible checkbox but not targeted by screen readers
  // Built to fully replace the default checkbox component
  // Conditional css formatting possible with styled components
  const StyledCheckbox = styled.div`
  display: inline-block;
  width: 24px;
  height: 24px;
  background: ${(props) => (props.checked ? 'blue' : 'lightgray')};
  border-radius: 50%;
  transition: all 150ms;
  ${Icon} {
    visibility: ${(props) => (props.checked ? 'visible' : 'hidden')}
  }
  `
  const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
  `
  // The attributes added to Checkbox component will be passed on and added to HiddenCheckbox, if they're not className or checked
  // checked is also passed to StyledCheckbox so it can be used in the styled component
  // The StyledCheckbox is what is going to show up
  // viewBox is the boundaries of the image, polyline points = coordinates
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
        <Checkbox checked={checked} onChange={handleOnChange}></Checkbox>
      </label>
    </div>
  )
}
