/* eslint-disable no-shadow */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-no-undef */
// import styled from 'styled-components';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import todos from 'reducers/todos';
import uniqid from 'uniqid';

const AddTask = () => {
  const dispatch = useDispatch()

  const [newTask, setNewTask] = useState('');

  const onFormSubmit = (event) => {
    event.preventDefault();

    const addNewTask = { id: uniqid(),
      text: newTask,
      isDone: false }

    dispatch(todos.actions.addTask(addNewTask))
    setNewTask(' ')
  }

  return (
    <form onSubmit={onFormSubmit}>
      <div>
        <input
          type="text"
          placeholder="add task"
          value={newTask}
          onChange={(event) => setNewTask(event.target.value)} />
        <button
          type="submit">
            add task
        </button>
      </div>
    </form>
  )
}

export default AddTask;