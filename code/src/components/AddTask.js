import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import tasks from '../reducers/task';

const AddTask = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();
  const handleNewTask = (event) => {
    setInputValue(event.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    /*
    - We need make obj  same structure as reducer items.
    - to create uniq id is Date.now()

    */
    const newTasks = {
      id: Date.now().toString(),
      name: inputValue,
      isCaught: false
    };

    // Dispatch the whole object
    dispatch(tasks.actions.addItem(newTasks));
    setInputValue('');
  };

  return (
    // printing out our new task in from/ to work form we need to add onSubmit

    <form className="wrapperForm" onSubmit={onFormSubmit}>
      <label>
        <input
          className="taskInput"
          type="text"
          value={inputValue}
          onChange={handleNewTask}
          placeholder="A new task..."
        />
      </label>
      <button className="addBtn" type="submit" disabled={inputValue.length < 1}>
        ➕
      </button>
    </form>
  );
};

export default AddTask;
