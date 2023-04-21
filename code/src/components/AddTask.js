import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { tasks } from '../reducers/tasks'

export const AddTask = () => {
  // useState to control form elements
  const [inputValue, setInputValue] = useState('');

  const dispatch = useDispatch();

  const onTaskSubmit = (event) => {
    // prevent default reload
    event.preventDefault();
    const newTask = {
      // use Date.now to create somewhat unique id:
      id: Date.now().toString(),
      text: inputValue,
      complete: false
    }
    dispatch(tasks.actions.addTask(newTask))
    // clear input field after submit
    setInputValue('')
  }

  return (
    <section>
      <form onSubmit={onTaskSubmit}>
        <label htmlFor="addInput">
          Add a new task.
          <input value={inputValue} id="addInput" type="text" onChange={(event) => setInputValue(event.target.value)} />
        </label>
        <button type="submit">+</button>
      </form>
    </section>
  )
}