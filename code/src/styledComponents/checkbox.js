import styled from 'styled-components'

/*Checkboxes */
/*Hidden checkbox with actual input.*/
export const HiddenCheckBox = styled.input.attrs({type:'checkbox'})`
  border: 0;
  clip: rect(0 0 0 0 );
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`
/*checkmark */
export const Icon = styled.svg`
  fill: none; 
  stroke: white;
  stroke-width: 2px;
`
/*New styled checkbox */
export const StyledCheckbox = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  /*changes styling depending on if box is checked or not */
  background: ${props => (props.checked ? 'black' : 'lightgrey')};
  border: ${props => (props.checked ? 'none' : 'black 0.5px solid')};
  border-radius: 3px;
  transition: all 150ms;
  ${Icon} { /* displays depending on if the state variable is checked or not*/
    visibility: ${(props) => (props.checked ? 'visible' : 'hidden')}
  }
  ${HiddenCheckBox}:focus + & {
    outline: 2px dotted black;
  }
`
export const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`