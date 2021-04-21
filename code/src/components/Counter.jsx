import React from 'react';
import { useSelector } from 'react-redux';

export const Counter = () => {
  const items = useSelector((store) => store.todos.items);
  
  return <h2>{items.length}</h2>
}
