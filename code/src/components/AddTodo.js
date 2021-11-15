import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import todos from '../reducers/todos';

const AddTodo = () => {
  const [input, setInput] = useState('');

  const dispatch = useDispatch();

  const onAddTodo = () => {
    dispatch(todos.actions.addTodo(input)); // this passes a value to action.payload that we can find in todos.js
    setInput(''); // this clears the input field when submitted
  };

  const handleKeyPress = event => {
    // this makes it possible to enter input with enter key
    if (event.key === 'Enter') {
      console.log('enter press here! ');
      onAddTodo();
    }
  };

  return (
    <div>
      <input
        type='text'
        value={input}
        onChange={event => setInput(event.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button type='button' onClick={onAddTodo}>
        Add todo
      </button>
    </div>
  );
};
export default AddTodo;
