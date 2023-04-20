import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import moment from 'moment';
import todolist from 'reducers/todolist';
import TaskList from './TaskList';

const AddTask = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();
    // this prevents the form from reloading
    const newTask = {
      id: uuid(),
      name: inputValue,
      time: moment().format('D MMM HH:mm'),
      isChecked: false
    }
    dispatch(todolist.actions.addTask(newTask));
    setInputValue('');
  }
  return (
    <section>
      <form onSubmit={onFormSubmit}>
        <label htmlFor="addTaskInput">
            Add your new task here:<br />
          <input
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            id="addTaskInput"
            type="text" />
        </label>
        <button type="submit">Add Task!</button>
      </form>
      <TaskList />
    </section>
  )
}

export default AddTask;