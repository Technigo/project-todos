import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import tasks from 'reducers/tasks';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const AddTask = () => {
  const [inputValue, setInputValue] = useState('');
  const [dueDate, setDueDate] = useState(null);

  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();
    const now = new Date();
    const newTask = {
      id: Date.now().toString(),
      name: inputValue.charAt(0).toUpperCase() + inputValue.slice(1),
      isComplete: false,
      timeStamp: now.toLocaleString(undefined, {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }),
      dueDate: dueDate ? dueDate.toLocaleString(undefined, {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
      }) : 'Whenever' // Use selected due date or null if not selected
    }
    dispatch(tasks.actions.addTask(newTask));
    setInputValue('');
    setDueDate(null);
  }

  return (
    <section>
      <form onSubmit={onFormSubmit}>
        <label htmlFor="addTaskInput">
            New Task:
          <input value={inputValue} onChange={(event) => setInputValue(event.target.value)} id="addTaskInput" type="text" />
        </label>
        <DatePicker
          selected={dueDate}
          onChange={(date) => setDueDate(date)}
          placeholderText="Select due date"
          dateFormat="yyyy-MM-dd" />
        <button type="submit">Add Task</button>
      </form>
    </section>
  )
}

export default AddTask;

