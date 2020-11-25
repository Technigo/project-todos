import styled from 'styled-components';

export const AddTodoForm = styled.form`
  width: 100%; 
`
export const NewTodo = styled.div`
  display: flex; 
  justify-content:center;
  align-items: center;
`
export const TodoText = styled.textarea`
  border-radius: 16px;
  border:solid 1px #fcbfc1;
  text-align: center;
  overflow-wrap: break-word;
  resize: none;
  min-height: 45px;
  margin: 20px 20px 0px 0px; 
`

export const AddButton = styled.button`
  align-self: center;
  background-color: #fcbfc1;
  border:none;
  font-size: 25px;
  border-radius: 80%;
  margin-top: 17px;
`