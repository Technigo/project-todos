/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useDispatch/* , useSelector */ } from 'react-redux';
import tasks from 'reducers/todos';

const AddTask = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  // prevents everything from reloading when submitting new task
  const onFormSubmit = (event) => {
    event.preventDefault();

    const newTask = { id: Date.now().toString(),
      name: inputValue,
      isCompleted: false }
    dispatch(tasks.actions.addTask(newTask));
    setInputValue('');
  }

  return (
    <form onSubmit={onFormSubmit}>
      <label>
        {/* New Pokemon: */}
        <input type="text" value={inputValue} placeholder="Add new task..." onChange={(event) => setInputValue(event.target.value)} />
      </label>
      <button type="submit"> Add</button>
    </form>
  )
}

export default AddTask;