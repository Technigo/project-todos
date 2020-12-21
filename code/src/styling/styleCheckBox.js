import styled from 'styled-components'

export const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
 `
export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })` 
  border: 0;
  clip:rect();
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
  width: 25px;
  height: 25px;
  margin-right: 20px;
  border: 1px solid grey;
  background: ${(props) => (props.checked) ? '#3CB371' : '#fdc1c5'};
  transition: all 150ms; 
  ${Icon} {
      visibility: ${props => (props.checked ? 'visible' : 'hidden')}
    }
`
export const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`