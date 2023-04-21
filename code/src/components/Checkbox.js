import styled from 'styled-components'

export const CheckBox = styled.input`
  -webkit-appearance: none;
  appearance: none;
  position: relative;
  background: ${(props) => (props.checked ? 'green' : 'white')};
  width: 1rem;
  height: 1rem;
  border-radius: 0.15em;
  margin-right: 0.5em;
  outline: none;
  cursor: pointer;

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0.5em;
    height: 0.5em;
    opacity: 0;
    transition: transform 0.3s, opacity 0.3s;
    width: 12px;
    height: 12px;
    background-color: green;
    border-radius: 3px;
    transition: 0.3s;
  }

  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    width: 12px;
    height: 12px;
    background-color: green;
    border-radius: 3px;
    transition: 0.3s;
  }

  &:checked:after {
    transform: translate(-50%, -50%) scale(1);
  }
`
