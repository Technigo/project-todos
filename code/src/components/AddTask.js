import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import todolist from 'reducers/todolist';

const AddTask = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();
    // this prevents the form from reloading
    const newTask = {
      id: Date.now().toString(),
      name: inputValue.charAt(0).toUpperCase() + inputValue.slice(1),
      isCaught: false
    }
    dispatch(todolist.actions.addTask(newTask));
    setInputValue('');
  }
  return (
    <section>
      <form onSubmit={onFormSubmit}>
        <label htmlFor="addTaskInput">
            Add your new task here:
          <input
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            id="addTaskInput"
            type="text" />
        </label>
        <button type="submit">Add Task!</button>
      </form>
    </section>
  )
}

export default AddTask;