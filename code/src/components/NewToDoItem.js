/* eslint-disable no-tabs */
import React, { useState } from 'react';
import styled from 'styled-components'
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
      <button className="add-btn" disabled={newtodo.length < 1} type="submit">Save</button>
    </form>

  )
}

export default NewToDoItem;

const Input = styled.input`
  font-size: 18px;
  padding: 10px;
  margin: 10px;
  background: papayawhip;
  border: none;
  border-radius: 3px;
  ::placeholder {
    color: palevioletred;
  }
`;