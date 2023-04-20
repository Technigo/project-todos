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
  border: solid 0.1rem #f25050;
  color: black;
  padding: 0.1rem 0.7rem;

   &:hover {
    background-color: #f25050;
    border: solid 0.1rem #fff;
    color: #fff;
    transition-duration: 0.4s;
    box-shadow: var(--box-shadow);
  }
`;

export const DeleteAllButton = styled(Button)`
  background-color: #f25050;
  color: #fff;
  padding: 0.1rem 0.7rem;

    &:hover {
    background-color: #fff;
    border: solid 0.1rem #f25050;
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

export const StyledIcon = styled(FontAwesomeIcon)`
margin: 1rem;
`;

