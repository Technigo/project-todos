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
    setInput(''); //clear inputfield
    dispatch(todos.actions.addTodo(input));
  };

  //Add todo by pressing enter
  // const checkKey = (event) => {
  //   if (event.keyCode === 13 && !event.shiftKey) {
  //     handleNewTodo(event);
  //   }
  // };

  // Function to handle onChange-event
  const handleNewTodo = (event) => {
    setInput(event.target.value);
  };

  return (
    <div className="input-wrapper">
      <label>
        <input
          id="todo"
          type="text"
          placeholder="ADD A TASK"
          value={input}
          onChange={handleNewTodo}
          ref={inputRef}
          // onKeyDown={(event) => checkKey(event)}
          className="todo-input"
        />
        <button className="input-button" onClick={onAddTodo}>
          add task
        </button>
      </label>
    </div>
  );
};

export default AddTodo;
