import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { useDispatch } from 'react-redux';
import { tasks } from 'reducers/tasks';
import 'react-datepicker/dist/react-datepicker.css';
import { ButtonStyles } from 'components/buttons/Buttons.styles';
import { AddTaskStyles } from './AddTask.styles';

export const AddTask = () => {
  const [inputValue, setInputValue] = useState('');
  const [category, setCategory] = useState('')
  const [dueDate, setDueDate] = useState(new Date());
  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();
    const newTask = {
      id: Date.now(),
      task: inputValue,
      category,
      due: Date.parse(dueDate),
      complete: false

    };
    dispatch(tasks.actions.addTask(newTask));
    // console.log(dueDate)
    setInputValue('');
    setCategory('')
  }

  return (
    <AddTaskStyles>
      <form onSubmit={onFormSubmit}>
        <h2>What do I need to do?</h2>
        <label htmlFor="addTaskInput">I need to:
          <input id="addTaskInput" type="text" placeholder="add a new task" value={inputValue} onChange={(event) => setInputValue(event.target.value)} />
        </label>
        <label htmlFor="addCategory">For:
          <select value={category} onChange={(event) => setCategory(event.target.value)} required>
            <option value="" disabled>Please select one:</option>
            <option value="Home">Home</option>
            <option value="Self">Self</option>
            <option value="Work">Work</option>
            <option value="Other">Other</option>
          </select>
        </label>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="setDueDate">By:
          <DatePicker id="setDueDate" selected={dueDate} onChange={(date) => setDueDate(date)} showWeekNumbers withPortal />
        </label>
        <div>
          <ButtonStyles type="submit">Add</ButtonStyles>
        </div>
      </form>
    </AddTaskStyles>
  )
}