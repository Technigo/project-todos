import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { todos } from '../reducers/todos';

export const TodoSummary = () => {

  const list = useSelector(store => store.todos.list);
  const numDone = list.items.filter(item => item.done).length;

  return (
    <section>
      <h2>{numDone}/{list.items.length} tasks complete</h2>
    </section>
  )
}