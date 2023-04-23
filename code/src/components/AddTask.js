/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
/* eslint-disable no-extend-native */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { task } from 'reducers/task';

export const AddTask = () => {
  const [inputValue, setInputValue] = useState('Add items here...')
  const dispatch = useDispatch();
  const onFormSubmit = (event) => {
    event.preventDefault();
    const newTask = {
      id: Date.now().toString(),
      name: inputValue,
      isCompleted: false
    }
    dispatch(task.actions.addTask(newTask));
    setInputValue('')
  }
  const onDeleteAllTasksClick = () => {
    dispatch(task.actions.deleteAllTasks());
    setInputValue('')
  }
  const onFocus = () => {
    setInputValue('')
  }
  return (
    <section>
      <form onSubmit={onFormSubmit}>
        <label htmlFor="addTaskInput">
          <input value={inputValue} onFocus={onFocus} onChange={(event) => setInputValue(event.target.value)} id="addTaskInput" type="text" required />
        </label>
        <button type="submit">Add</button>
      </form>
      <button className="deleteall-btn" type="button" onClick={onDeleteAllTasksClick}><img src="../Oxygen480-actions-draw-eraser.svg" alt="eraser" /></button>
    </section>
  )
}