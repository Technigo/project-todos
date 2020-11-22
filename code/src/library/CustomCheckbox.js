import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { todos } from '../reducers/todos';

// const CustomCheckbox = () => {
// const dispatch = useDispatch();
// const [checked, setChecked] = useState(false);
// const handleOnChange = event => {
//   setChecked(event.target.checked);
// };

//   const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
//     border: 0;
//     clip: rect(0 0 0 0);
//     clip-path: inset(50%);
//     height: 1px;
//     margin: -1px;
//     overflow: hidden;
//     padding: 0;
//     position: absolute;
//     white-space: nowrap;
//     width: 1px;

//     &:focus {
//       box-shadow: 0 0 0 3px pink;
//     }
//   `;

//   const Icon = styled.svg`
//     fill: none;
//     stroke: width;
//     stroke-width: 2px;
//   `;

//   const StyledCheckbox = styled.div`
//   display: inline-block;
//   width; 16px;
//   heigth; 16px;
//   background: ${props => (props.checked ? 'salmon' : 'papayawhip')};
//   border-radius: 3px;
//   transition: all 150ms;
//   cursor: pointer;
//   ${Icon} {
//     visibility: ${props => (props.checked ? 'visible' : 'hidden')}
//   }
//   `;

//   const CheckboxContainer = styled.div`
//     display: inline-block;
//     vertical-align: middle;
//   `;

//   const Checkbox = ({ className, checked, ...props }) => (
//     <CheckboxContainer>
//       <HiddenCheckbox checked={checked} {...props}></HiddenCheckbox>
//       <StyledCheckbox checked={checked}></StyledCheckbox>
//       <Icon viewBox="0 0 24 24">
//         <polyline points="20 6 9 17 4 12" />
//       </Icon>
//     </CheckboxContainer>
//   );

//   return (
//     <div>
//       <label>
//         <Checkbox checked={checked} onChange={handleOnChange}></Checkbox>
//       </label>
//     </div>
//   );
// };

const CheckboxLabel = styled.label`
  margin-right: 10px;
`;

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 3px;
`;
// Hide checkbox visually but remain accessible to screen readers.
// Source: https://polished.js.org/docs/#hidevisually
const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
  cursor: pointer;
`;

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 2px solid salmon;
  background: ${props => (props.checked ? 'salmon' : 'white')};
  border-radius: 50%;
  transition: all 150ms;

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px pink;
  }

  ${Icon} {
    visibility: ${props => (props.checked ? 'visible' : 'hidden')};
  }
`;

const CustomCheckbox = ({ className, checked, ...props }) => (
  <CheckboxLabel>
    <CheckboxContainer className={className}>
      <HiddenCheckbox className="hiddencheck" checked={checked} {...props} />
      <StyledCheckbox checked={checked}>
        <Icon viewBox="0 0 24 24">
          <polyline points="20 3 9 17 4 12" />
        </Icon>
      </StyledCheckbox>
    </CheckboxContainer>
  </CheckboxLabel>
);

export default CustomCheckbox;
