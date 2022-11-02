import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import tasks from 'reducers/tasks';

const AddTask = () => {
  const [input, setInput] = useState('')

  const dispatch = useDispatch()

  const onTaskAdd = (event) => {
    event.preventDefault(event);
    dispatch(tasks.actions.addTask(input));
    setInput('');
  };

  return (
    <div>
      <form onSubmit={(event) => onTaskAdd(event)}>
        <input
          type="text"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          required />
        <button type="submit">+</button>
      </form>
    </div>
  );
}

export default AddTask;