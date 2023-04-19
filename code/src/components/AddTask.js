import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import tasks from 'reducers/tasks';
import { moment } from 'moment';

const AddTask = () => {
  const dispatch = useDispatch();
  const [inputItem, setInputItem] = useState('');
  const onFormSubmit = (event) => {
    event.preventDefault();
    const newTask = {
      id: Date.now().toString(),
      text: inputItem,
      creatAt: moment().format('LLL'),
      completed: false
    }
    dispatch(tasks.actions.addTask(newTask))
    setInputItem('')
  }
  return (
    <form onSubmit={onFormSubmit}>
      <label htmlFor="addTaskInput">
        Add your new todos here
        <input value={inputItem} onChange={(event) => setInputItem(event.target.value)} id="addTaskInput" type="text" />
      </label>
      <button type="submit"> ➕ New TO TO </button>
    </form>
  )
}
export default AddTask;