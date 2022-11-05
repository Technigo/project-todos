import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import tasks from '../reducers/task';

const AddTask = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

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
    // printing out our new task in from/ to work from we need to add onSubmit
    <form onSubmit={onFormSubmit}>
      <label>
        New Task:
        <input
          type="text"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
      </label>
      <button type="submit"> Add Task</button>
    </form>
  );
};

export default AddTask;
