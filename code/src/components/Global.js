import styled from 'styled-components';

export const Button = styled.button`
  width: 8rem;
  padding: 0.5rem;
  font-size: 0.9375rem;
  border-radius: 0.25rem;
  border: none;
  transition-duration: 0.4s;
  box-shadow: var(--box-shadow);
  margin: 0.625rem;
  font-family: var(--paragraph-font-family);
  cursor: pointer;

  &:hover {
    background-color: white;
    color: black;
    transition-duration: 0.4s;
    box-shadow: var(--box-shadow);
  }
`;

export const AddButton = styled(Button)`
  background-color:var(--btn1-color);
  color: black;
`;

export const DeleteButton = styled(Button)`
  background-color: #f25050;
  color: black;
`;

export const DeleteAllButton = styled(Button)`
  background-color: #f25050;
  color: black;
`;

export const Lists = styled.ul`
font-family: var(--paragraph-font-family);
`;

export const StyledTaskList = styled(Lists)`
list-style: none;
`;
