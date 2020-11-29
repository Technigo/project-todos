import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { todos } from 'reducers/todos';
import styled from 'styled-components';

const FormAdd = styled.form`
text-align:center;
`;

const Button = styled.button`
  color: #3f3f3f;
  font-size: 18px;
  margin: 6px;
  padding: 6px;
  border: 1.5px solid #3f3f3f;
  border-radius: 1.5px;
    &:hover {
      background-color:#b83b5e;
      color:white;
      border:white
    }
`
const Input = styled.input`
  padding: 5px 0;
  width: 200px;
  height: 30px;
  font-size: 18px;
  font-style: italic;
  border-radius: 0;
  text-decoration: none;
  margin: 20px 0;
  border: none;
  background-color:#ebebeb;
  border-bottom: 2px solid rgba(0, 0, 0, 0.055);
  text-align: left;
`;


export const Form = () => {
const [value, setValue] = useState("")
  const dispatch = useDispatch()
  const onSubmitTask = event => {
    event.preventDefault()
    dispatch(todos.actions.addItem(value))
    setValue("")
  }

return(
    <>
      <FormAdd className="add-task" onSubmit={onSubmitTask}>
        <Input type="text"  
              onChange={event => setValue(event.target.value)}
              className="form-text"
              placeholder="add task"
              value={value}>
        </Input>
        <Button type="submit"
          className="form-button"
          value={"Add"} 
        >Add
        </Button>
      </FormAdd>
    </>
)
}

