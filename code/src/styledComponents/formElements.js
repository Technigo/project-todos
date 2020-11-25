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
  background: ${props => (props.checked ? 'black' : 'grey')};
  border-radius: 3px;
  transition: all 150ms;
  ${Icon} { /* displays depending on if the state variable is checked or not*/
    visibility: ${(props) => (props.checked ? 'visible' : 'hidden')}
  }
`
export const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`
/* Inputfield */
export const Form = styled.form`
  width: 100%;
  padding-left: 5px;
  padding-right: 5px;
`
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: bold;
  font-size: 20px;
`
export const InputField = styled.input`
  height: 40px;
  width: 80%;
  font-size: 20px;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: lighter;
  padding-left: 10px;
`
export const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`