import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import todos from '../reducers/todos';

const AddTodo = () => {
  const [input, setInput] = useState('');

  const dispatch = useDispatch();

  const onAddTodo = () => {
    // Here you can add payload 👇🏽
    dispatch(todos.actions.addTodo(input));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Add new task"
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
      <button onClick={onAddTodo}>+</button>
    </div>
  );
};

export default AddTodo;
