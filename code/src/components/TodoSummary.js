import React from 'react';
import { useSelector } from 'react-redux';

import TodoItem from './TodoItem';
import TodoInput from './TodoInput'

const TodoSummary = () => {
  const list = useSelector(store => store.todos.list);
  console.log(`summary ${list}`)

  const todosCompleted = list.items.filter(item => item.complete).length

  return (
    <section className="todo__summary">
      <p>{todosCompleted} / {list.items.length} completed tasks.</p>
    </section>
  )
}
export default TodoSummary;

/*
- Get list informatoin from the store 
- Count the number of items that are done using filter 
*/