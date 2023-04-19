import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import completed from 'reducers/completed';
import uncompleted from 'reducers/uncompleted';

export const Completed = () => {
  const dispatch = useDispatch();

  const completedTasks = useSelector((store) => store.completed.tasks)

  const checkboxHandler = (task) => {
    dispatch(completed.actions.deleteTask(task));
    dispatch(uncompleted.actions.addTask(task));
  };

  return (
    <section>
      {completedTasks.map((task) => (
        <div key={task.id}>
          <label htmlFor="checkbox">
            <input type="checkbox" id="checkbox" onChange={() => checkboxHandler(task)} />{task.text}
          </label>
          <button type="button" onClick={() => dispatch(completed.actions.deleteTask(task))}>🗑️</button>
        </div>
      ))}
    </section>
  )
}
