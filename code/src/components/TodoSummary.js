import React from 'react';

import { useSelector } from 'react-redux';

export const TodoSummary = () => {
  
  const list = useSelector(store => store.todos.list);
  const finishedTasks = list.items.filter(item => item.done).length;

  return(
    <section className="todo-summary">
      <h2 className="todo-summary-text">{finishedTasks}/{list.items.length} tasks complete</h2>
    </section>
  )
}