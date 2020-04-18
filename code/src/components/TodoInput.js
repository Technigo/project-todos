import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { todos } from 'reducers/todos';


export const TodoInput = () => {
  const dispatch = useDispatch()

  const [inputValue, setInputValue] = useState("")

  const handleOnSubmit = event => {
    event.preventDefault();

    dispatch(todos.action.addTodo({
      description: "this is a test todo",
      done: false
    }));

    setInputValue("");
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <input
        type="text"
        onChange={event => setInputValue(event.target.value)}
        value={inputValue}
      ></input>
      <input
        type="submit"
        value="Add todo"
      ></input>
    </form>
  )
};