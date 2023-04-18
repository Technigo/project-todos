import React from 'react';
import { useSelector } from 'react-redux';
import { AddTask } from './AddTask';

export const Uncompleted = () => {
  const uncompletedTasks = useSelector((store) => store.uncompleted.tasks)

  return (
    <div>
      <h1>Tasks:</h1>
      <ul>
        {uncompletedTasks.map((task) => (
          <label key={task.id} htmlFor="checkbox">
            <input type="checkbox" id="checkbox" />{task.text}
          </label>
        ))}
      </ul>
      <AddTask />
    </div>
  )
}