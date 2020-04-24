import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { tasks } from '../reducers/tasks';
import DatePicker from 'react-date-picker'

export const TaskInput = () => {
  const [inputValue, setInputValue] = useState("");
  const [category, setCategory] = useState('')
  const [dueDate, setDueDate] = useState()

  const dispatch = useDispatch();

  const handleOnSubmit = e => {
    e.preventDefault();
    dispatch(
      tasks.actions.addTask({
        itemInfo: { text: inputValue, complete: false, category, dueDate, id: Date.now(), }
      }));
    console.log("klicka")
    setInputValue("");
    setCategory('') // Clearing the input
    setDueDate('') // Clearing the input
  };

  return (
    <form className="taskInput" onSubmit={handleOnSubmit}>
      <input
        type="text" required={true} disabled={false}
        placeholder="What do you need to do?"
        onChange={e => setInputValue(e.target.value)}
        value={inputValue}
        className="task-input-text"
      >
      </input>
      <div className="catDate">
        <label className="categoryPickerContainer">
          <select className="selectCat"
            value={category}
            onChange={(event) => setCategory(event.target.value)}>
            <option value=''>CATEGORY</option>
            <option value='Do'>Do:</option>
            <option value='Pay'>Pay:</option>
            <option value='Buy'>Buy:</option>
            <option value='Mail'>Mail:</option>
            <option value='Call'>Call:</option>
          </select>
        </label>

        {/* Date picker to set due date */}
        <label className="datePickerContainer">
          <DatePicker className="datePicker" onChange={(date) => setDueDate(date)} value={dueDate} />
        </label>
      </div>
      <div className="addButtonContainer">
        <button
          className="addButton"
          type='submit'
          background='#3f8488'
        > ADD YOUR TASK
        </button>
      </div>
    </form >
  );
};


