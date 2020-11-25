import styled from 'styled-components'
/*kolla upp attrs */
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
export const StyledCheckbox = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  background: ${props => (props.checked ? 'green' : 'red')};
  border-radius: 3px;
  transition: all 150ms;
`
export const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`