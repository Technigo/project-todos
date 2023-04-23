/*eslint-disable*/
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import tasks from 'reducers/task';

Object.defineProperty(String.prototype, 'capitalize', {
  value: function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
  },
  enumerable: false
});

const AddTask = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();
  const onFormSubmit = (event) => {
    event.preventDefault();
    const newTask = {
      id: Date.now().toString(),
      name: inputValue.capitalize(),
      isCaught: false
    }
    // false. so that it is not checked.
    dispatch(tasks.actions.addTask(newTask));
    setInputValue('');
  }
  const onDeleteYourTaskBtnClick = () => {
    dispatch(tasks.actions.deleteAllTasks());
  }

  return (
    <section>
      <button type="button" onClick={onDeleteYourTaskBtnClick}>Delete all tasks</button>
      <form onSubmit={onFormSubmit}>
        <label htmlFor="addTaskInput">
        Add your new task here.
          <input value={inputValue} onChange={(event) => setInputValue(event.target.value)} id="addTaskInput" type="text" placeholder="Write your to do here" required />
        </label>
        <button type="submit"> Add task!</button>
      </form>
    </section>
  )
}

export default AddTask;