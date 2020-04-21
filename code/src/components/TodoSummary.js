import React from 'react';
import { useSelector } from 'react-redux';

export const TodoSummary = () => {

  const list = useSelector(store => store.todos.list);
  const numDone = list.items.filter(item => item.done).length;

  return (
    <section>
      <h2>{numDone}/{list.items.length} tasks complete</h2>
    </section>
  )
}