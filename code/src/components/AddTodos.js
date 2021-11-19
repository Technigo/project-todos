import React, { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';

import todos from 'reducers/todos';

const AddTodo = () => {
  const [input, setInput] = useState('');
  // automatically focus on the input (you don't need to click the input)
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const dispatch = useDispatch();

  const onAddTodo = () => {
    setInput(''); //clearar inputfield
    dispatch(todos.actions.addTodo(input));
  };

  return (
    <div className="input-wrapper">
      <label htmlFor="todo" />
      <input
        id="todo"
        type="text"
        placeholder="Add a task"
        value={input}
        onChange={(event) => setInput(event.target.value)} // make a function?
        ref={inputRef}
        className="todo-input"
      />
      <button className="input-button" onClick={onAddTodo}>
        Add todo
      </button>
    </div>
  );
};

export default AddTodo;
