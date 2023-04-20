import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { task } from 'reducers/task';

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
      <button type="button" onClick={onDeleteAllTasksClick}>Delete all tasks</button>
      <form onSubmit={onFormSubmit}>
        <label htmlFor="addTaskInput">
            Add your new task here.
          <input value={inputValue} onChange={(event) => setInputValue(event.target.value)} id="addTaskInput" type="text" />
        </label>
        <button type="submit">Add task</button>
      </form>
    </section>
  )
}