/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import todos from 'reducers/todo';

const AddTodo = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();
  const onFormSubmit = (event) => {
    event.preventDefault();
    const newTodo = {

      id: Date.now().toString(),
      name: inputValue,
      isDone: false
    };
    dispatch(todos.actions.addTodo(newTodo));
    setInputValue('');
  }
  const onRemoveAllTodosClick = () => {
    dispatch(todos.actions.deleteAllTodos());
  }

  return (
    <section>
      <button type="button" onClick={onRemoveAllTodosClick}>Remove all todos</button>
      <form onSubmit={onFormSubmit}>
        <lable> What to do:
          <input value={inputValue} onChange={(event) => setInputValue(event.target.value)} type="text" />
        </lable>
        <button type="submit">Add a todo</button>
      </form>
    </section>
  )
}

export default AddTodo;