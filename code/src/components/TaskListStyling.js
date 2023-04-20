import styled from 'styled-components';

export const Content = styled.div`
  /* background-color: var(--background); */
  min-width: 334px;
  max-width: 500px;
  margin: 0 auto;
  padding: 10px;

  @media (min-width: 992px) {
    padding: 50px;
  }
`;

export const TaskForm = styled.form`
  border: transparent;
`;

export const Button = styled.button`
  width: 100px;
  padding: 8px;
  font-size: 15px;
  border-radius: 4px;
  transition-duration: 0.4s;
  box-shadow: none;
  margin: 10px;
  font-family: var(--paragraph-font-family);

  &:hover {
    background-color: white;
    color: black;
    transition-duration: 0.4s;
    box-shadow: var(--box-shadow);
  }
  `;

export const DeleteButton = styled(Button)`
  border: 1px solid black;
  background-color: #f25050;
  color: black;
`;

export const DeleteAllButton = styled(Button)`
  border: 1px solid black;
  background-color: #f25050;
  color: black;
`;