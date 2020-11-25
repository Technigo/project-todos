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
  box-shadow: rgba(171,167,177,0.8) 0 0 10px;
  border-collapse: collapse;
  text-align: center;
  overflow-wrap: break-word;
  resize: none;
  min-height: 35px;
  margin: 20px 30px 0px 0px; 
`

export const AddButton = styled.button`
  align-self: center;
  background-color: #ffffff;
  border:none;
  font-size: 20px;
  border-radius: 80%;
  margin-top: 17px;
  margin-right:15px
`