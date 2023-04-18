import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { tasks } from '../reducers/tasks';

const AddTodo = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();
    const newTodo = {
      id: uuidv4(),
      content: inputValue.charAt(0).toUpperCase() + inputValue.slice(1)
    };
    dispatch(tasks.actions.addItem(newTodo));
    setInputValue('');
    // https://www.random.org/
  };

  return (
    <div className="Input">
      <form onSubmit={onFormSubmit}>
        <label htmlFor="addTodoInput">
          <span>What do you need to do?</span>
          <input
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            id="addTodoInput"
            type="text" />
        </label>
        <button type="submit" className="add-btn"> Add Now!</button>
      </form>
    </div>
  );
}

export default AddTodo;