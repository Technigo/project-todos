import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import completed from 'reducers/completed';
import uncompleted from 'reducers/uncompleted';
import format from 'date-fns/format';

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
          <p>Task completed at: {format(task.completionTime, 'HH:mm dd/MM/yyyy')}</p>
        </div>
      ))}
    </section>
  )
}
