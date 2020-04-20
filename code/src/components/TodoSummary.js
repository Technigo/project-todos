import React from 'react';
import { useSelector } from 'react-redux';

export const TodoSummary = () => {
  const list = useSelector(store => store.todos.list);
  const doneTodos = list.items.filter(item => item.done).length;

  return (
    <section className='todo-summary'>
      <h2>{doneTodos}/{list.items.length} tasks complete</h2>
    </section>
  )
};