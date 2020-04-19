import React from 'react';
import { useSelector } from 'react-redux';

export const TaskSummary = () => {
  const list = useSelector(store => store.tasks.list);

  const numDone = list.items.filter(item => item.complete).length;

  return (
    <section className="task-summary">
      <h2>
        {numDone}/{list.items.length} tasks done
      </h2>
    </section>
  )
}
