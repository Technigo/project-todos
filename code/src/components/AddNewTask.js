import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import tasks from 'reducers/tasks';

export const AddNewTask = () => {
  const [inputValue, setinputValue] = useState('');
  const dispatch = useDispatch();

  const onTaskSubmit = (event) => {
    event.preventDefault();
    const newTask = {
      id: Date.now().toString(),
      name: inputValue,
      isDone: false
    }
    dispatch(tasks.actions.addTask(newTask))
    setinputValue('');
  };
  return (
    <section>
      <form onSubmit={onTaskSubmit}>
        <label htmlFor="task-input">
          <input
            value={inputValue}
            onChange={(event) => setinputValue(event.target.value)}
            id="addTaskInput"
            type="text"
            placeholder="Add task" />
        </label>
        <button type="submit" className="submit-button"> Add task</button>
      </form>
    </section>
  )
}

