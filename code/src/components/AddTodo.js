import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { tasks } from '../reducers/tasks';

const AddTodo = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();
    const newTodo = {
      id: Date.now().toString(),
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
          What do you need to do?
          <input
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            id="addTodoInput"
            type="text" />
        </label>
        <button type="submit"> Add Now!</button>
      </form>
    </div>
  );
}

export default AddTodo;