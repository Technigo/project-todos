import React from 'react';
import { useSelector } from 'react-redux';

export const Uncompleted = () => {
  const uncompletedTasks = useSelector((store) => store.uncompleted.tasks)

  return (
    <div>
      <h1>Uncompleted Tasks:</h1>
      <ul>
        {uncompletedTasks.map((task) => (
          <li key={task.id}>{task.text}</li>
        ))}
      </ul>
    </div>
  )
}