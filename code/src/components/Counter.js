import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { tasks } from 'reducers/tasks';
import './Counter.css';

export const Counter = () => {
  const dispatch = useDispatch();
  const currentTasks = useSelector(state =>
    state.tasks.taskData.reduce(
      (total, task) => (task.complete ? total : total + 1),
      0
    )
  );

  return (
    <div className="counterContainer">
      <div>
        <h3 className="tasksLeft">{currentTasks} tasks todo</h3>
      </div>
      <button
        className="clearAllTasks"
        type="button"
        onClick={() => dispatch(tasks.actions.removeAllTasks())}
      >
        Clear All
      </button>
    </div>
  );
};
