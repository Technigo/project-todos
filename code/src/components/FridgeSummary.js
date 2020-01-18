import React, { useState } from 'react';
import { useSelector } from 'react-redux';

export const FridgeSummary = () => {
  const items = useSelector(state => state.tasks.taskData);
  const leftTasks = items.filter(task => task.complete);
  const [deletedTasks, setDeletedTasks] = useState([]);

  return (
    <section>
      <h3>{items.length}</h3>
      <h2>
        {' '}
        {leftTasks.length} task complete {leftTasks.length === 1 ? '.' : 'ed'}
        <span onClick={() => setDeletedTasks(!deletedTasks)}>
          Deleted Tasks
        </span>
      </h2>

      {deletedTasks && (
        <ul>
          {leftTasks.map(items => (
            <li key={items.id}>{items.name}</li>
          ))}
        </ul>
      )}
    </section>
  );
};
