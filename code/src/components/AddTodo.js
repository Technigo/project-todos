import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { tasks } from '../reducers/tasks';
import { AddButton } from './styled_components/buttons'

const AddTodo = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();
    const newTodo = {
      id: uuidv4(),
      content: inputValue.charAt(0).toUpperCase() + inputValue.slice(1),
      isChecked: false
    };
    dispatch(tasks.actions.addItem(newTodo));
    setInputValue('');
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
        <AddButton type="submit">+</AddButton>
      </form>
    </div>
  );
}

export default AddTodo;