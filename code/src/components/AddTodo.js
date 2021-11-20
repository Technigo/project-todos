import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import todos from '../reducers/todos';
import './addTodo.css';

const AddTodo = () => {
  const [input, setInput] = useState('');

  const dispatch = useDispatch();

  const onAddTodo = () => {
    setInput(''); // clears inputfield after adding task
    dispatch(todos.actions.addTodo(input)); // Here you can add payload
  };

  return (
    <div className="add-todo">
      <input
        type="text"
        placeholder="Add new task"
        required
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
      <button onClick={onAddTodo} disabled={input.length < 1}>
        +
      </button>
    </div>
  );
};

export default AddTodo;
