/* eslint-disable no-tabs */
import React, { useState } from 'react';
// import styled from 'styled-components'
// import styled from 'styled-components/macro'
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
      <input
        type="text"
        placeholder="Add Task"
        value={newtodo}
        onChange={(e) => handleChange(e)}
        className="todo-input" />
      <button className="add-btn" disabled={newtodo.length < 1} type="submit">Add Task</button>
    </form>

  )
}

export default NewToDoItem;