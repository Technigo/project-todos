import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { useDispatch } from 'react-redux';
import { tasks } from 'reducers/tasks';
import 'react-datepicker/dist/react-datepicker.css';
import { ButtonStyles } from 'components/buttons/Buttons.styles';
import { AddTaskStyles } from './AddTask.styles';

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
    <AddTaskStyles>
      <form onSubmit={onFormSubmit}>
        <h1>What do I need to do?</h1>
        <label htmlFor="addTaskInput">I need to:
          <input id="addTaskInput" type="text" value={inputValue} onChange={(event) => setInputValue(event.target.value)} />
        </label>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="setDueDate">By:
          <DatePicker id="setDueDate" selected={dueDate} onChange={(date) => setDueDate(date)} showWeekNumbers withPortal />
        </label>
        <div>
          <ButtonStyles type="submit">Add Task</ButtonStyles>
        </div>
      </form>
    </AddTaskStyles>
  )
}