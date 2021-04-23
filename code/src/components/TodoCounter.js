import React from 'react';
import { useSelector } from 'react-redux';

const TodoCounter = () => {
  const counter = useSelector((store) => store.todos.items);
  return <p>Todos to do: {counter.length}</p>;
};

export default TodoCounter;
