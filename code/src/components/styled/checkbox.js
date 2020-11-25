import styled from 'styled-components'

export const Dot = styled.svg`
  `
  
 export const HiddenCheckBox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`
export const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`  
export const StyledCheckBox = styled.div`
  display: inline-block;
  width: 22px;
  height: 22px;
  background: ${(props) => (props.checked ? '#f25849' : '#F9EFE5')};
  border-radius: 50%;
  transition: all 150ms;
  cursor: pointer;
  ${Dot} {
  visibility: ${props => props.checked ? 'visible' : 'hidden'}
  }
`