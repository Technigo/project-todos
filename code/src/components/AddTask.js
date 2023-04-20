import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import tasks from 'reducers/tasks';

const AddTask = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');
  const onAddTask = (event) => {
    event.preventDefault();
    dispatch(tasks.actions.addTask(inputValue))
    // mpty the text field
    setInputValue('')
  }
  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)} />
      <button type="button" onClick={onAddTask}> ➕ New TO TO </button>
    </>
  )
}
export default AddTask;