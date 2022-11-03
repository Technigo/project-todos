import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import tasks from 'reducers/tasks';

const AddTask = () => {
  const [input, setInput] = useState('')

  const dispatch = useDispatch()

  const onAddTask = (event) => {
    event.preventDefault(event);
    dispatch(tasks.actions.addTask(input));
    setInput('');
  };

  return (
    <div>
      <form onSubmit={(event) => onAddTask(event)}>
        <input
          type="text"
          value={input}
          placeholder="Add new task"
          onChange={(event) => setInput(event.target.value)} />
        <button
          type="submit"
          disabled={input === ''}>+
        </button>
      </form>
    </div>
  );
}

export default AddTask;