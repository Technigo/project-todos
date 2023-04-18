import React from 'react';
import { useSelector } from 'react-redux';

export const Completed = () => {
  const completedTasks = useSelector((store) => store.completed.tasks)
  return (
    <div>
      <h1>Completed Tasks:</h1>
      <ul>
        {completedTasks.map((task) => (
          <li key={task.id}>{task.text}</li>
        ))}
      </ul>
    </div>
  )
}
