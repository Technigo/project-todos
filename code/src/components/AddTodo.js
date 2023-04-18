import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import todos from 'reducers/todo';

export const AddTodo = () => {
  const [inputText, setInputText] = useState('');
  const dispatch = useDispatch();

  const onAddTodo = (event) => {
    event.preventDefault();
    const newTodo = {
      id: Date.now().toString(),
      name: inputText,
      isDone: false
    }
    dispatch(todos.actions.addTodos(newTodo))
    setInputText('');
  }
  return (
    <form onSubmit={onAddTodo}>
      <label htmlFor="task-input">
        <input onChange={(event) => setInputText(event.target.value)} id="task-input" type="text" placeholder="Add-task" />
      </label>
      <button type="submit">Add new todo</button>
    </form>
  )
}