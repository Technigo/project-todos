import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

export const Button = styled.button`
  display:flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  border-radius: 0.5rem;
  border: none;
  transition-duration: 0.4s;
  margin: 0.625rem;
  font-family: var(--paragraph-font-family);
  text-align: center;
  cursor: pointer;
`;

export const AddButton = styled(Button)`
  background-color:var(--btn1-color);
  color: black;
  padding: 0.8rem;
  box-shadow: var(--box-shadow);

   &:hover {
    background-color: white;
    border: solid 0.1rem var(--btn1-color);
    color: black;
    transition-duration: 0.4s;
    box-shadow: var(--box-shadow);
  }
`;

export const DeleteButton = styled(Button)`
  background-color: transparent;
  text-indent: -9999px; 
  //Text-indent hides the text "Delete" but still allows it to be read by screen readers. 
  // The text-indent property moves the text off-screen, but it is still present in the DOM.
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
  margin: 0 auto;
  box-shadow: var(--box-shadow);

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
font-size: 1.2rem;
`;

export const StyledTaskList = styled(Lists)`
list-style: none;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
`;

export const StyledTaskListItem = styled.li`
  margin: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
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
  box-shadow: var(--box-shadow);

  &:checked {
    background-color: #fff;
    border-color:var(--secondary-background-color);
  }

  &:checked::before {
    /* content: '\\2714' inserts a checkmark symbol (Unicode character \u2714) 
    before the content of the checkbox when it is checked. The checkmark symbol 
    is represented by its Unicode code point, which is specified using the 
    escape sequence \\2714. */
    content: '\\2714'; 
    display: inline-block;
    font-size: 14px;
    line-height: 1;
    text-align: center;
    color: var(--secondary-background-color);
  }

  &:focus {
    outline: 2px solid #000;
  }
`;

export const StyledCheckboxLabel = styled.label`
cursor: ponter;
`

export const StyledIcon = styled(FontAwesomeIcon)`
margin: 0.5rem;
`;

