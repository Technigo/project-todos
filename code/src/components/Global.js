import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

export const Button = styled.button`
  display:flex;
  justify-content: center;
  align-items: center;
  font-size: 0.9375rem;
  border-radius: 0.5rem;
  border: none;
  transition-duration: 0.4s;
  box-shadow: var(--box-shadow);
  margin: 0.625rem;
  font-family: var(--paragraph-font-family);
  text-align: center;
  cursor: pointer;
`;

export const AddButton = styled(Button)`
  background-color:var(--btn1-color);
  color: black;
  padding: 1rem;

   &:hover {
    background-color: white;
    border: solid 0.1rem var(--btn1-color);
    color: black;
    transition-duration: 0.4s;
    box-shadow: var(--box-shadow);
  }
`;

export const DeleteButton = styled(Button)`
  background-color: #fff;
  border: solid 0.1rem var(--btn2-color);
  color: black;
  padding: 0.1rem 0.7rem;

   &:hover {
    background-color:var(--btn2-color);
    color: #fff;
    transition-duration: 0.4s;
    box-shadow: var(--box-shadow);
  }
`;

export const DeleteAllButton = styled(Button)`
  background-color: var(--btn2-color);
  color: #fff;
  padding: 0.1rem 0.7rem;

    &:hover {
    background-color: #fff;
    border: solid 0.1rem var(--btn2-color);
    color: #000;
    transition-duration: 0.4s;
    box-shadow: var(--box-shadow);
  }
`;

export const Lists = styled.ul`
font-family: var(--paragraph-font-family);
`;

export const StyledTaskList = styled(Lists)`
list-style: none;
display: flex;
flex-wrap: wrap;
align-items: center;
`;

export const StyledCheckbox = styled.input`
  position: relative;
  top: 0;
  margin-right: 10px;
  height: 20px;
  width: 20px;
  appearance: none;
  border: 2px solid var(--primary-background-color);
  border-radius: 3px;
  outline: none;
  cursor: pointer;
  transition-duration: 0.4s;

  &:checked {
    background-color: #fff;
    border-color:var(--secondary-background-color);
  }

  &:checked::before {
    /* content: '\\2714' inserts a checkmark symbol (Unicode character \u2714) before the content of the checkbox when it is checked. The checkmark symbol is represented by its Unicode code point, which is specified using the escape sequence \\2714. */
    content: '\\2714'; 
    display: inline-block;
    font-size: 14px;
    line-height: 1;
    text-align: center;
    color: var(--secondary-background-color);
  }
`;

export const StyledIcon = styled(FontAwesomeIcon)`
margin: 1rem;
`;

