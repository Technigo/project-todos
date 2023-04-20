import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import tasks from 'reducers/tasks';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { AddTaskWrapper, AddTaskChildDiv } from './AddTaskStyling';
import { Button } from './Button';

const AddTask = () => {
  const [inputValue, setInputValue] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

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
      }) : 'Whenever', // Use selected due date or 'whenever' if not selected
      category: selectedCategory
    }
    dispatch(tasks.actions.addTask(newTask));
    setInputValue('');
    setDueDate('');
    setSelectedCategory('');
  }

  return (
    <section>
      <AddTaskWrapper onSubmit={onFormSubmit}>
        <select
          value={selectedCategory}
          onChange={(event) => setSelectedCategory(event.target.value)}>
          <option value="">Select a category</option>
          <option value="Home">Home</option>
          <option value="Work">Work</option>
          <option value="Shopping">Buy</option>
          <option value="Other">Other</option>
        </select>
        <AddTaskChildDiv>
          <label htmlFor="addTaskInput">
            <input
              value={inputValue}
              onChange={(event) => setInputValue(event.target.value)}
              id="addTaskInput"
              type="text"
              placeholder="Add new task"
              required />
          </label>
          <DatePicker
            id="datePicker"
            selected={dueDate}
            onChange={(date) => setDueDate(date)}
            placeholderText="Due"
            dateFormat="yyyy-MM-dd" />
        </AddTaskChildDiv>
        <Button type="submit">Add Task</Button>
      </AddTaskWrapper>
    </section>
  )
}

export default AddTask;

