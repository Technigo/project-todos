import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import tasks from 'reducers/tasks';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import { AddTaskWrapper, AddTaskChildDiv } from './AddTaskStyling';
import { Button } from '../Button';

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
      timeStamp: now.toDateString(undefined, {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }),
      dueDate: dueDate ? dueDate.toDateString(undefined, {
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
        <label htmlFor="addTaskInput">
          <input
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            id="addTaskInput"
            type="text"
            placeholder="Add new task"
            required />
        </label>
        <AddTaskChildDiv>
          <select
            value={selectedCategory}
            onChange={(event) => setSelectedCategory(event.target.value)}>
            <option className="select-title" value="">Pick a category</option>
            <option value="Home">Home</option>
            <option value="Work">Work</option>
            <option value="Shopping">Buy</option>
            <option value="Other">Other</option>
          </select>
          <DatePicker
            className="datePicker"
            showIcon
            selected={dueDate}
            onChange={(date) => setDueDate(date)}
            placeholderText="📅 Due by"
            dateFormat="yyyy-MM-dd" />
          <Button smallBtn type="submit"><FontAwesomeIcon icon={faCirclePlus} size="lg" /></Button>
        </AddTaskChildDiv>

      </AddTaskWrapper>
    </section>
  )
}

export default AddTask;

