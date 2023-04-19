import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import tasks from 'reducers/tasks';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { AddNewTaskBtn, AddNewTaskWrapper } from './AddTaskStyling';

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
      <AddNewTaskWrapper onSubmit={onFormSubmit}>
        <label htmlFor="addTaskInput">
          <input
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            id="addTaskInput"
            type="text"
            placeholder="Add new task"
            required />
        </label>
        <select
          value={selectedCategory}
          onChange={(event) => setSelectedCategory(event.target.value)}>
          <option value="">Select a category</option>
          <option value="Chores">Chores</option>
          <option value="Shopping">Shopping</option>
          <option value="Work">Work</option>
          <option value="Other">Other</option>
        </select>
        <DatePicker
          selected={dueDate}
          onChange={(date) => setDueDate(date)}
          placeholderText="Select due date"
          dateFormat="yyyy-MM-dd" />
        <AddNewTaskBtn type="submit">Add Task</AddNewTaskBtn>
      </AddNewTaskWrapper>
    </section>
  )
}

export default AddTask;

