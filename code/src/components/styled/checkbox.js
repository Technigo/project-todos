import styled from 'styled-components'

export const Dot = styled.svg`
  &:hover {
    opacity: 0.7
  }
  `

 export const CheckBox = styled.input.attrs({ type: 'checkbox' })`
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
`
export const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`  
export const StyledCheckBox = styled.div`
  display: inline-block;
  width: 22px;
  height: 22px;
  background: ${(props) => (props.checked ? '#16F712' : '#f25849')};
  border-radius: 50%;
  transition: all 180ms;
  cursor: pointer;
  ${Dot} {
  visibility: ${props => props.checked ? 'visible' : 'hidden'}
  }
`