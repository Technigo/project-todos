import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import uncompleted from 'reducers/uncompleted';
import completed from 'reducers/completed';
import format from 'date-fns/format';

export const Uncompleted = () => {
  const dispatch = useDispatch();
  const uncompletedTasks = useSelector((store) => store.uncompleted.tasks);

  const onTaskChecked = (task) => {
    dispatch(uncompleted.actions.deleteTask(task));
    dispatch(completed.actions.setTaskDone(task));
  }

  return (
    <section>
      {uncompletedTasks.map((task) => (
        <div key={task.id}>
          <label htmlFor="checkbox">
            <input type="checkbox" id="checkbox" onChange={() => onTaskChecked(task)} />{task.text}
          </label>
          <button type="button" onClick={() => dispatch(uncompleted.actions.deleteTask(task))}>🗑️</button>
          <p>Task created at: {format(task.creationTime, 'HH:mm dd/MM/yyyy')}</p>
        </div>
      ))}
    </section>
  )
}