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
      onAddTodo();
    }
  };

  return (
    <div>
      <input
        type='text'
        value={input}
        placeholder='5-20 characters '
        onChange={event => setInput(event.target.value)}
        onKeyPress={input.length >= 5 ? handleKeyPress : ''}
        minLength='5'
        maxLength='20'
      />
      <button
        className='add-button'
        type='button'
        onClick={onAddTodo}
        disabled={input.length < 5 || input.length > 20}
      >
        ➕
      </button>
    </div>
  );
};
export default AddTodo;
