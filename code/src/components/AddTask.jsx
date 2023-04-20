import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Tasks from 'reducers/Task';

const AddTask = () => {
  const [inputValue, setInputValue] = useState('');

  const dispatch = useDispatch()

  const onFormSubmit = (event) => {
    event.preventDefault();
    const newTask = {
      id: Date.now().toString(),
      text: inputValue.toUpperCase(),
      isComplete: false
    }
    dispatch(Tasks.actions.addTask(newTask));
    setInputValue('');
  }
  const onClickDeleteAllTasks = () => {
    dispatch(Tasks.actions.deleteAllTasks());
  }
  return (
    <section>
      <button type="button" onClick={onClickDeleteAllTasks}>Delete all tasks</button>
      <form onSubmit={onFormSubmit}>
        <label htmlFor="addTaskInput">
                add your task here
          <input value={inputValue} onChange={(event) => setInputValue(event.target.value)} id="addTaskInput" type="text" />
        </label>
        <button type="submit">Add now</button>
      </form>
    </section>
  )
}

export default AddTask