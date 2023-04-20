/* eslint-disable no-extend-native */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { task } from 'reducers/task';

// const capitalize = (stringToCapitalize) => {
//   return stringToCapitalize.charAt(0).toUpperCase() + stringToCapitalize.slice(1);
// }
export const AddTask = () => {
  const [inputValue, setInputValue] = useState('')
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
  return (
    <section>
      <form onSubmit={onFormSubmit}>
        <label htmlFor="addTaskInput">
          <input value={inputValue} onChange={(event) => setInputValue(event.target.value)} id="addTaskInput" type="text" />
        </label>
        <button type="submit">Add</button>
      </form>
      <button type="button" onClick={onDeleteAllTasksClick}>Delete all groceries</button>
    </section>
  )
}