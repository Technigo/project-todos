/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import todos from 'reducers/todos';

const AddTodo = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();
  const onFormSubmit = (event) => {
    event.preventDefault();
    const newTodo = { id: Date.now().toString(),
      name: inputValue,
      isCaught: false }
    dispatch(todos.actions.addItem(newTodo));
    setInputValue('');
  }

  return (
    <form onSubmit={onFormSubmit}>
      <input
        id="new-todo"
        type="text"
        className="form-control mb-2 mr-sm-2"
        placeholder="Add todo..."
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)} />
      <label htmlFor="new-todo" />
      <button className="btn btn-primary mb-2" type="submit"> Add new to do</button>
    </form>
  )
}

export default AddTodo;
