import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { todos } from 'reducers/todos';

export const AddTodo = () => {
  const [todoText, setTodoText] = useState('');
  const dispatch = useDispatch();

  const handleInputChange = e => {
    setTodoText(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!todoText.trim()) {
      return;
    }
    dispatch(todos.actions.addTodo({ text: todoText }));
    setTodoText('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={todoText} type="text" onChange={handleInputChange} />
        <button type="submit">Add todo</button>
      </form>
    </div>
  );
};
