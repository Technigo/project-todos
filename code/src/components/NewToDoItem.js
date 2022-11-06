/* eslint-disable no-tabs */
import React, { useState } from 'react';
import styled from 'styled-components/macro'
import { useDispatch } from 'react-redux'
import toDos from 'reducers/toDos'
import uniqid from 'uniqid';

const NewToDoItem = () => {
  const dispatch = useDispatch()
  const [newtodo, setNewTodo] = useState('');
  const handleChange = (e) => {
    setNewTodo(e.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    const addNewToDo = { id: uniqid(),
      name: newtodo,
      complete: false }
    dispatch(toDos.actions.addItem(addNewToDo))
    setNewTodo('')
  };

  return (
    <form onSubmit={onFormSubmit}>
      <Input
        type="text"
        placeholder="🖊️ Add a new Task"
        value={newtodo}
        onChange={(e) => handleChange(e)}
        className="todo-input" />
      <Button className="add-btn" disabled={newtodo.length < 1} type="submit">Save</Button>
    </form>

  )
}

export default NewToDoItem;

const Input = styled.input`
  font-size: 18px;
  margin: 10px;
  padding: 12px 8px 12px 40px;
  background: papayawhip;
  border: none;
  border-radius: 3px;
  ::placeholder {
    color: palevioletred;
  }
`;

const Button = styled.button`
  text-align: center;
  font-size: 18px;
  cursor: pointer;
  transition: 0.3s;
  border-radius: 0;
	background: #FFF0F5; 
	font-family: OCR A Std, monospace;
`;