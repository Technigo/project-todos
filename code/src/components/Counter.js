import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { tasks } from 'reducers/tasks';
import './Header.css';

export const Counter = () => {
  const dispatch = useDispatch();
  const currentTasks = useSelector(state =>
    state.tasks.taskData.reduce(
      (total, task) => (task.complete ? total : total + 1),
      0
    )
  );

  // not done, need to fix how to remove all tasks
  const clearTasksButton = task => {
    dispatch(tasks.actions.removeAllTasks(task));
  };

  return (
    <section className="counterContainer">
      <div>
        <h3 className="tasksLeft">{currentTasks} tasks left</h3>
      </div>
      <div>
        <button
          className="clearAllTasks"
          type="button"
          onClick={clearTasksButton}
        >
          Clear all
        </button>
      </div>
    </section>
  );
};
