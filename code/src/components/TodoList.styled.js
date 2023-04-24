import styled from 'styled-components';

export const TaskBackground = styled.div`
  background-color: ${(props) => props.color || 'transparent'};
  padding: 10px;
  border-radius: 4px;
`;

export const TodoListWrap = styled.div`
  border-radius: 10px;
  max-width: 280px;
  padding: 0px;
  background: #ffff;
  margin: 20px auto;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  -webkit-box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  -moz-box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  @media (min-width: 400px) {
    max-width: 340px;
 }
`;

export const TodoInfoWrap = styled.div`
  padding-left: 10px;
  margin-top: -5px;
`;

export const CheckMarkWrap = styled.label`
`;

export const StyledCheckbox = styled.input`
  cursor: pointer;
  appearance: none;
  margin-left: -30px;
  font: inherit;
  color: #282828;
  width: 1.1em;
  height: 1.1em;
  border-radius: 5px;
 
  transform: translateY(-0.075em);
  display: grid;
  place-content: center;
  position: relative;
  &::before {
    content: '';
    width: 1em;
    height: 1em;
    border-radius: 2px;
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em lightgrey;
  }
  &:checked::before {
    box-shadow: inset 1em 1em lightgrey; 
  }
  &:checked::after {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    border: solid #282828;
    border-width: 0 3px 3px 0;
    top: 1px;
    left: 3px;
    transform: rotate(45deg);
  }
  @media (min-width: 400px) {
    &:checked::after {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    border: solid #282828;
    border-width: 0 3px 3px 0;
    top: 1px;
    left: 3px;
    transform: rotate(45deg);
    }}

    @media (min-width: 600px) {
 
  margin-right:10px;
  
    &:checked::after {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    border: solid #282828;
    border-width: 0 3px 3px 0;
    top: 6px;
    left: 8px;
    transform: rotate(45deg);
    }}
`;
