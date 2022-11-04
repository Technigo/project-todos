/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const AddNewTask = ({ onFormSubmit, inputValue, setInputValue }) => {
  return (
    <form onSubmit={onFormSubmit}>
      <label>
        new Task:
        <input type="text" value={inputValue} onChange={(event) => setInputValue(event.target.value)} />
      </label>
      <button type="submit">Add task</button>
    </form>
  )
}

export default AddNewTask;

