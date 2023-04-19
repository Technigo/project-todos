import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import uncompleted from 'reducers/uncompleted';
import { AddTask } from './AddTask';

export const Uncompleted = () => {
  const dispatch = useDispatch();
  const uncompletedTasks = useSelector((store) => store.uncompleted.tasks);

  return (
    <section>
      {uncompletedTasks.map((task) => (
        <div>
          <label key={task.id} htmlFor="checkbox">
            <input type="checkbox" id="checkbox" />{task.text}
          </label>
          <button type="button" onClick={() => dispatch(uncompleted.actions.deleteTask(task))}>🗑️</button>
        </div>
      ))}
      <AddTask />
    </section>
  )
}