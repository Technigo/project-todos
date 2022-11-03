import React from 'react'
import { useSelector } from 'react-redux';

const ToDoAmount = () => {
  const items = useSelector((store) => store.todos.items.length);
  return (
    <p>{items} tasks</p>
  )
}

export default ToDoAmount