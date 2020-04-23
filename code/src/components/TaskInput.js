import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { tasks } from '../reducers/tasks';
import DatePicker from 'react-date-picker'

export const TaskInput = ({ listId }) => {
  const [inputValue, setInputValue] = useState("");
  const [category, setCategory] = useState('')
  const [dueDate, setDueDate] = useState()

  const dispatch = useDispatch();

  const handleOnSubmit = e => {
    e.preventDefault();
    dispatch(
      tasks.actions.addTask({
        itemInfo: { text: inputValue, complete: false, category, dueDate }
      }));

    setInputValue("");
    setCategory('') // Clearing the input
    setDueDate('') // Clearing the input
  };

  return (
    <section className="containerInput">
      <form className="task-input" onSubmit={handleOnSubmit}>
        <input
          type="text"
          placeholder="What do you ned to do?"
          onChange={e => setInputValue(e.target.value)}
          value={inputValue}
          className="task-input-text">

        </input>
        {/*  <input
          type="submit"
          className="task-input-button"
          value="Add Task">
          </input>*/}
        <label>
          Category:
          <select id="selectCat"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          >
            <option value=''>select...</option>
            <option value='Do'>Do</option>
            <option value='Contact'>Contact</option>
            <option value='Pay'>Pay</option>
            <option value='Buy'>Buy</option>
          </select>
        </label>

        {/* Date picker to set due date */}
        <label>
          Due Date
          <DatePicker className="datePicker" onChange={(date) => setDueDate(date)} value={dueDate} />
        </label>
        <button className="addButton" type='submit' background='#3f8488'>
          Add task
        </button>
      </form>
    </section>
  );
};