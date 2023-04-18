import React from 'react';
import { useSelector } from 'react-redux';

export const Completed = () => {
  const checkboxHandler = () => {
    console.log('hello')
  };

  const completedTasks = useSelector((store) => store.completed.tasks)
  return (
    <div>
      <h2>Completed Tasks:</h2>
      <ul>
        {completedTasks.map((task) => (
          <label key={task.id} htmlFor="checkbox">
            <input type="checkbox" id="checkbox" onChange={checkboxHandler} />{task.text}
          </label>
        ))}
      </ul>
    </div>
  )
}
