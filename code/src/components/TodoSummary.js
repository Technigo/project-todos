import React from 'react';
import { useSelector } from 'react-redux';

export const TodoSummary = ({projectName}) => {
  const list = useSelector(store => store.todos[projectName]);
  const doneTodos = list.filter(item => item.done).length;

  return (
    <section className='todo-summary'>
      <span>{list.length} {list.length === 1 ? 'tasks' : 'task'}</span>
      <span>{doneTodos} completed</span>
    </section>
  )
};