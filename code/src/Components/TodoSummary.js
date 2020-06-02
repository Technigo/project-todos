import React from 'react'
import { useSelector } from 'react-redux'
import { Paragraph } from '../lib/Text'

export const TodoSummary = () => {
  const list = useSelector(store => store.todos.list);

  const numDone = list.items.filter(item => item.done).length;

  return (
    <section className="todo-summary">
      <Paragraph>
        {numDone}/{list.items.length} tasks complete
      </Paragraph>
    </section>
  );
};