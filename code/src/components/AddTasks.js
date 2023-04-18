/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { useDispatch, useState } from 'react-redux';
import { tasks } from './Reducers/tasks';

const AddTasks = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();
    const newTask = { id: Date.now().toString(),
      name: inputValue,
      isListed: true };
    dispatch(tasks.actions.AddTasks(newTask));
    setInputValue('');
  }

  return (
    <section>
      <form onSubmit={onFormSubmit}>
        <label htmlFor="addtodotask"> Add your To Do Here
          <input value={inputValue} onChange={(event) => setInputValue(event.target.value)} id="addtodotask" type="text" />
        </label>
        <button type="submit" />
      </form>
    </section>
  )
}

export default AddTasks;