import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import todos from '../reducers/todos';

const AddTodo = () => {
  const [todoInput, setTodoInput] = useState('');

  const dispatch = useDispatch();

  const onAddTodo = () => {
    dispatch(todos.actions.addTodo(todoInput));
  };

  const onTodoInputChange = (event) => {
    setTodoInput(event.target.value);
    // console.log(onTodoInputChange);
  };

  return (
    <div>
      <input type='text' value={todoInput} onChange={onTodoInputChange} />
      <button onClick={onAddTodo}>Add todo</button>
    </div>
  );
};

export default AddTodo;
