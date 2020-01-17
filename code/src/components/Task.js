import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { tasks } from 'reducers/tasks';

export const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleCheckbox = () => {
    dispatch(tasks.actions.toggleCompleteTask(task.id));
    dispatch(tasks.actions.addToCounter(task.complete));
  };

  const handleRemoveOnClick = () => {
    dispatch(tasks.actions.removeTask(task.id));
  };

  return (
    <section className="taskItem">
      <div className="taskList">
        <input
          className="checkbox"
          type="checkbox"
          checked={task.complete}
          onChange={handleCheckbox}
        />

        <p className="taskName" onClick={handleCheckbox}>
          {task.text}
        </p>
        <button
          className="removeBtn"
          type="button"
          onClick={handleRemoveOnClick}
        >
          Delete
        </button>
      </div>
    </section>
  );
};
