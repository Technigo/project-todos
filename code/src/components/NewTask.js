import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { tasks } from './reducers/tasks';

export const NewTask = () => {
  const [inputValue, setInputValue] = useState('')
  const dispatch = useDispatch()
  const onTaskSubmit = (event) => {
    event.preventDefault();
    const addTask = {
      id: Date.now().toString(),
      text: inputValue,
      complete: false
    }
    dispatch(tasks.actions.addTask(addTask));
    setInputValue('');
  }
  return (
    <section>
      <form onSubmit={onTaskSubmit}>
        <label htmlFor="addTaskInput">
                Add task
          <input value={inputValue} onChange={(event) => setInputValue(event.target.value)} id="addTaskInput" type="text" />
        </label>
        <button type="submit">Add</button>
      </form>
    </section>
  )
}