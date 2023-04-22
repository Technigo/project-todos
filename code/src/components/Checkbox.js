import styled from 'styled-components'

export const CheckBox = styled.input`
  -webkit-appearance: none;
  appearance: none;
  position: relative;
  background: #f5f5f5;
  width: 2rem;
  height: 2rem;
  border-radius: 3px;
  margin-right: 0.5em;
  display: inline-block;
  cursor: pointer;

  &:checked:before {
    content: '';
    position: absolute;
    width: 2rem;
    height: 2rem;
    opacity: 0;
    background-color: #60AB80;
    border-radius: 3px;
    transform: translate(-50%, -50%) scale(1);
    transition: 0.3s;
  }

  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    width: 1.5rem;
    height: 1.5rem;
    background-color: #60AB80;
    border-radius: 3px;
    transition: 0.3s;
  }

  &:checked:after {
    transform: translate(-50%, -50%) scale(1);
  }
`
