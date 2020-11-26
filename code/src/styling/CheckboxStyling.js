import styled from 'styled-components'

export const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`

export const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
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

export const StyledCheckbox = styled.div`
  display: inline-block;
  width: 30px;
  height: 30px;
  cursor:pointer;
  background: ${props => (props.checked ? '#66bb6a' : 'white')};
  border-radius: 50%;
  transition: all 1500ms;
  ${Icon} {
    visibility: ${props => (props.checked ? 'visible' : 'hidden')}
  };
`