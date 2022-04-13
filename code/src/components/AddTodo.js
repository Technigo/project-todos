import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import uniqid from 'uniqid';
//import styled from 'styled-components'

import todos from 'reducers/todos'

const AddTodo = () => {
  const [inputValue, setInputValue] = useState("");

  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();

    const newTodo = {
      id: uniqid(),
      title: inputValue,
      isDone: false,
    }

    dispatch(todos.actions.addItem(newTodo));

    setInputValue("");
  };

  return (
    <form onSubmit={onFormSubmit}>
      <label>
        New to-do: &nbsp;
      <input 
      type="text" 
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      />
      </label>
      <button type="submit">Submit</button>
    </form>
  )
};

export default AddTodo;