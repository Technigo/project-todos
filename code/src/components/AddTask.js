import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import tasks from 'reducers/tasks';

const AddTask = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();
  const onFormSubmit = (event) => {
    event.preventDefault();
    const newTask = {
      id: Date.now().toString(),
      name: inputValue.charAt(0).toUpperCase() + inputValue.slice(1),
      isComplete: false
    };
    dispatch(tasks.actions.addTask(newTask));
    setInputValue('');
  }
  return (
    <section>
      <form onSubmit={onFormSubmit}>
        <label htmlFor="addTaskInput">
            New Task:
          <input value={inputValue} onChange={(event) => setInputValue(event.target.value)} id="addTaskInput" type="text" />
        </label>
        <button type="submit">Add Task</button>
      </form>
    </section>
  )
}

export default AddTask;