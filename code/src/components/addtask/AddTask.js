import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { useDispatch } from 'react-redux';
import { tasks } from 'reducers/tasks';
import 'react-datepicker/dist/react-datepicker.css';

export const AddTask = () => {
  const [inputValue, setInputValue] = useState('');
  const [dueDate, setDueDate] = useState(new Date());
  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();
    const newTask = {
      id: Date.now(),
      task: inputValue,
      complete: false,
      due: Date.parse(dueDate)
    };
    dispatch(tasks.actions.addTask(newTask));
    // console.log(dueDate)
    setInputValue('');
  }

  return (
    <section>
      <form onSubmit={onFormSubmit}>
        <label htmlFor="addTaskInput">Add a new task:
          <input id="addTaskInput" type="text" value={inputValue} onChange={(event) => setInputValue(event.target.value)} />
        </label>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="setDueDate">Due by:
          <DatePicker id="setDueDate" selected={dueDate} onChange={(date) => setDueDate(date)} showWeekNumbers withPortal />
        </label>
        <div>
          <button type="submit">Add Task</button>
        </div>
      </form>
    </section>
  )
}