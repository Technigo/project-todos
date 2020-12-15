import styled from 'styled-components';

export const AddTodoForm = styled.form`
  width: 100%; 
`;

export const NewTodo = styled.div`
  display: flex; 
  justify-content:center;
  align-items: center;
`;

export const TodoText = styled.textarea`
  border-radius: 16px;
  border:solid 1px #fcbfc1;
  text-align: center;
  overflow-wrap: break-word;
  resize: none;
  min-height: 45px;
  margin: 20px 20px 0px 0px; 

  @media (min-width: 768px) {
    min-height: 75px;
    min-width: 240px;
  };
`;

export const AddButton = styled.button`
  align-self: center;
  border:none;
  font-size: 30px;
  color: #ffffff;
  border-radius: 80%;
  padding: 4px 13px 6px 13px;
  margin-top: 17px;
  cursor:pointer;
  &:hover {
    background-color: #b4c2d8;
    color: #ffffff;
  };
  ${props =>
    props.disabled ?` background: #b4c2d8 `:` background: #fcbfc1`};
`;
