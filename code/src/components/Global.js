import styled from 'styled-components';

export const Button = styled.button`
  width: 6.25rem;
  padding: 0.5rem;
  font-size: 0.9375rem;
  border-radius: 0.25rem;
  transition-duration: 0.4s;
  box-shadow: none;
  margin: 0.625rem;
  font-family: var(--paragraph-font-family);

  &:hover {
    background-color: white;
    color: black;
    transition-duration: 0.4s;
    box-shadow: var(--box-shadow);
  }
`;

export const AddButton = styled(Button)`
  border: 0.0625rem solid black;
  background-color:var(--btn1-color);
  color: black;
`;

export const DeleteButton = styled(Button)`
  border: 0.0625rem solid black;
  background-color: #f25050;
  color: black;
`;

export const DeleteAllButton = styled(Button)`
  border: 0.0625rem solid black;
  background-color: #f25050;
  color: black;
`;
